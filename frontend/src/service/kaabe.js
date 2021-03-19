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
const AddOrder = promisify(staticClient.addOrder).bind(staticClient);

/**
 * Exchange auth token.
 * @param {*} token 
 * @returns 
 */
async function authExchange(token) {
  const request = new messages.EmptyRequest();
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const resp = await AuthExchange(request, metadata);
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
  console.log(spId, includeItems)
  const resp = await GetServiceProvider(req);
  return resp.toObject();
}

/**
 * Gets a specific order.
 * @returns 
 */
 async function getOrder(orderId) {
  const req = new messages.OrderRequest();
  const order = new messages.Order();
  order.setGuid(orderId);
  req.setItem(order)
  const resp = await GetOrder(req);
  return resp.toObject();
}

/**
 * Places a new order.
 * @returns 
 */
 async function addOrder(spId, data) {
  // { providerId: data.spId, item: data }
  const req = new messages.OrderRequest();
  req.setProviderId(spId);
  const order = new messages.Order();

  // Populate item.
  order.setStatus(1);
  order.setTableNumber(data.tableNumber || "");
  order.setCustomerName(data.customerName || "");
  order.setCustomerNotes(data.customerNotes || "");
  order.setOrderRows(data.orderRows);
  order.setTotalPrice(data.totalPrice);
  order.setTotalDiscount(data.totalDiscount);
  req.setItem(order)
  const resp = await AddOrder(req);
  return resp.toObject();
}

export { getServiceProvider, getServiceProviderList, getOrder, addOrder, authExchange };
