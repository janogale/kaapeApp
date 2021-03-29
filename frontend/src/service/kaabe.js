const grpc = require('@grpc/grpc-js');
const { promisify } = require("util");
const messages = require('./kaabe_pb');
const kaabeService = require('./kaabe_grpc_pb');

const target = "staff.kaabeapp.com:8443";

const staticClient = new kaabeService.KaabeServiceClient(target, grpc.credentials.createSsl());
const AuthExchange = promisify(staticClient.authExchange).bind(staticClient);
const GetServiceProviderList = promisify(staticClient.getServiceProviderList).bind(staticClient);
const GetServiceProvider = promisify(staticClient.getServiceProvider).bind(staticClient);
const GetOrder = promisify(staticClient.getOrder).bind(staticClient);
const GetOrders = promisify(staticClient.getOrders).bind(staticClient);
const AddOrder = promisify(staticClient.addOrder).bind(staticClient);

function getMetadata(token) {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  return metadata;
}

/**
 * Exchange auth token.
 * @param {*} token 
 * @returns 
 */
async function authExchange(token) {
  const request = new messages.EmptyRequest();
  const resp = await AuthExchange(request, getMetadata(token));
  return resp.toObject();
}

/**
 * Providers list.
 * @returns 
 */
async function getServiceProviderList() {
  const resp = await GetServiceProviderList(new messages.GetServiceProviderListRequest());
  return resp.toObject();
}

/**
 * Get provider.
 * @returns 
 */
async function getServiceProvider(spId, includeItems = true) {
  const req = new messages.GetServiceProviderRequest();
  req.setGuid(spId);
  req.setIncludeItems(includeItems);
  const resp = await GetServiceProvider(req);
  return resp.toObject();
}

/**
 * Gets a specific order.
 * @returns 
 */
 async function getOrder(orderId, token) {
  const req = new messages.OrderRequest();
  const order = new messages.Order();
  order.setGuid(orderId);
  req.setItem(order)
  const resp = await GetOrder(req, getMetadata(token));
  return resp.toObject();
}


/**
 * Gets a specific order.
 * @returns 
 */
 async function getOrders(token) {
  const req = new messages.GetOrdersRequest();
  const resp = await GetOrders(req, getMetadata(token));
  return resp.toObject();
}

/**
 * Places a new order.
 * @returns 
 */
 async function addOrder(spId, data, token) {
  // { providerId: data.spId, item: data }
  const req = new messages.OrderRequest();
  req.setProviderId(spId);
  const order = new messages.Order();

  // Populate item.
  order.setStatus(1);  // In queue
  order.setTableNumber(data.tableNumber || "");
  order.setCustomerName(data.customerName || "");
  order.setCustomerNotes(data.customerNotes || "");
  order.setOrderRows(data.orderRows);
  order.setTotalPrice(data.totalPrice);
  order.setTotalDiscount(data.totalDiscount);
  req.setItem(order)
  const resp = await AddOrder(req, getMetadata(token));
  return resp.toObject();
}

export { getServiceProvider, getServiceProviderList, getOrder, getOrders, addOrder, authExchange };
