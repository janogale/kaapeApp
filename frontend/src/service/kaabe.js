//const grpc = require("@grpc/grpc-js");
const { promisify } = require("util");
const messages = require("./kaabe_pb");
const kaabeService = require("./kaabe_grpc_web_pb");
const target = "https://kaabeapi.azurewebsites.net";

const staticClient = new kaabeService.KaabeServiceClient(target);

const AuthExchange = promisify(staticClient.authExchange).bind(staticClient);

const GetServiceProviderList = promisify(
  staticClient.getServiceProviderList
).bind(staticClient);
const GetServiceProvider = promisify(staticClient.getServiceProvider).bind(
  staticClient
);
const GetOrder = promisify(staticClient.getOrder).bind(staticClient);
const GetOrders = promisify(staticClient.getOrders).bind(staticClient);
const AddOrder = promisify(staticClient.addOrder).bind(staticClient);

function getMetadata(token) {
  return { authorization: token };
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
  return new Promise((resolve, reject) => {
    const req = new messages.GetServiceProviderListRequest();

    staticClient.getServiceProviderList(req, {}, function (err, res) {
      console.log(res);
      if (!err) {
        resolve(res.toObject(false));
      }
      reject(err);
    });
  });
}

/**
 * Get provider.
 * @returns
 */
function getServiceProvider(spId, includeItems = true) {
  return new Promise((resolve, reject) => {
    const req = new messages.GetServiceProviderRequest();
    req.setGuid(spId);
    req.setIncludeItems(includeItems);
    staticClient.getServiceProvider(req, {}, function (err, res) {
      if (!err) {
        resolve(res.toObject());
      }
      reject(err);
    });
  });
}

/**
 * Gets a specific order.
 * @returns
 */
async function getOrder(orderId, token) {
  return new Promise((resolve, reject) => {
    const req = new messages.OrderRequest();
    const order = new messages.Order();
    order.setGuid(orderId);
    req.setItem(order);
    staticClient.getOrder(req, {}, function (err, res) {
      if (!err) {
        resolve(res.toObject(false));
      }
      reject(err);
    });
  });
}

/**
 * Gets a specific order.
 * @returns
 */
async function getOrders(token) {
  return new Promise((resolve, reject) => {
    const req = new messages.GetOrdersRequest();
    staticClient.GetOrders(req, getMetadata(token), function (err, res) {
      if (!err) {
        resolve(res.toObject(false));
      }
      reject(err);
    });
  });
}

/**
 * Places a new order.
 * @returns
 */
async function addOrder(spId, data, token) {

  return new Promise((resolve, reject) => {
    const req = new messages.OrderRequest();
    req.setProviderId(spId);
    const order = new messages.Order();

    // Populate item.
    order.setStatus(1); // In queue
    order.setTableNumber(data.tableNumber || "");
    order.setCustomerName(data.customerName || "");
    order.setCustomerNotes(data.customerNotes || "");
    order.setOrderRows(data.orderRows);
    order.setTotalPrice(data.totalPrice);
    order.setTotalDiscount(data.totalDiscount);
    req.setItem(order);
    staticClient.addOrder(req, getMetadata(token), function (err, res) {
      if (!err) {
        resolve(res.toObject(false));
      }
      reject(err);
    });
  });
}

export {
  getServiceProvider,
  getServiceProviderList,
  getOrder,
  getOrders,
  addOrder,
  authExchange,
};
