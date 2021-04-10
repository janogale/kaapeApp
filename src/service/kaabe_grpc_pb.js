// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var kaabe_pb = require('./kaabe_pb.js');

function serialize_kaabe_AuthExchangeMessage(arg) {
  if (!(arg instanceof kaabe_pb.AuthExchangeMessage)) {
    throw new Error('Expected argument of type kaabe.AuthExchangeMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_AuthExchangeMessage(buffer_arg) {
  return kaabe_pb.AuthExchangeMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_CategoryRequest(arg) {
  if (!(arg instanceof kaabe_pb.CategoryRequest)) {
    throw new Error('Expected argument of type kaabe.CategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_CategoryRequest(buffer_arg) {
  return kaabe_pb.CategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_EmptyRequest(arg) {
  if (!(arg instanceof kaabe_pb.EmptyRequest)) {
    throw new Error('Expected argument of type kaabe.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_EmptyRequest(buffer_arg) {
  return kaabe_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetCustomersResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetCustomersResponse)) {
    throw new Error('Expected argument of type kaabe.GetCustomersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetCustomersResponse(buffer_arg) {
  return kaabe_pb.GetCustomersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetMenuItemsResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetMenuItemsResponse)) {
    throw new Error('Expected argument of type kaabe.GetMenuItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetMenuItemsResponse(buffer_arg) {
  return kaabe_pb.GetMenuItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetMessagesResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetMessagesResponse)) {
    throw new Error('Expected argument of type kaabe.GetMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetMessagesResponse(buffer_arg) {
  return kaabe_pb.GetMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetOrdersRequest(arg) {
  if (!(arg instanceof kaabe_pb.GetOrdersRequest)) {
    throw new Error('Expected argument of type kaabe.GetOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetOrdersRequest(buffer_arg) {
  return kaabe_pb.GetOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetOrdersResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetOrdersResponse)) {
    throw new Error('Expected argument of type kaabe.GetOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetOrdersResponse(buffer_arg) {
  return kaabe_pb.GetOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetPaginatedResourcesRequest(arg) {
  if (!(arg instanceof kaabe_pb.GetPaginatedResourcesRequest)) {
    throw new Error('Expected argument of type kaabe.GetPaginatedResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetPaginatedResourcesRequest(buffer_arg) {
  return kaabe_pb.GetPaginatedResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetPaymentsResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetPaymentsResponse)) {
    throw new Error('Expected argument of type kaabe.GetPaymentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetPaymentsResponse(buffer_arg) {
  return kaabe_pb.GetPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetServiceProviderListRequest(arg) {
  if (!(arg instanceof kaabe_pb.GetServiceProviderListRequest)) {
    throw new Error('Expected argument of type kaabe.GetServiceProviderListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetServiceProviderListRequest(buffer_arg) {
  return kaabe_pb.GetServiceProviderListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetServiceProviderListResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetServiceProviderListResponse)) {
    throw new Error('Expected argument of type kaabe.GetServiceProviderListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetServiceProviderListResponse(buffer_arg) {
  return kaabe_pb.GetServiceProviderListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetServiceProviderRequest(arg) {
  if (!(arg instanceof kaabe_pb.GetServiceProviderRequest)) {
    throw new Error('Expected argument of type kaabe.GetServiceProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetServiceProviderRequest(buffer_arg) {
  return kaabe_pb.GetServiceProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetServiceProviderResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetServiceProviderResponse)) {
    throw new Error('Expected argument of type kaabe.GetServiceProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetServiceProviderResponse(buffer_arg) {
  return kaabe_pb.GetServiceProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetServiceProvidersRequest(arg) {
  if (!(arg instanceof kaabe_pb.GetServiceProvidersRequest)) {
    throw new Error('Expected argument of type kaabe.GetServiceProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetServiceProvidersRequest(buffer_arg) {
  return kaabe_pb.GetServiceProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_GetServiceProvidersResponse(arg) {
  if (!(arg instanceof kaabe_pb.GetServiceProvidersResponse)) {
    throw new Error('Expected argument of type kaabe.GetServiceProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_GetServiceProvidersResponse(buffer_arg) {
  return kaabe_pb.GetServiceProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_MenuItemRequest(arg) {
  if (!(arg instanceof kaabe_pb.MenuItemRequest)) {
    throw new Error('Expected argument of type kaabe.MenuItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_MenuItemRequest(buffer_arg) {
  return kaabe_pb.MenuItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_Order(arg) {
  if (!(arg instanceof kaabe_pb.Order)) {
    throw new Error('Expected argument of type kaabe.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_Order(buffer_arg) {
  return kaabe_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_OrderRequest(arg) {
  if (!(arg instanceof kaabe_pb.OrderRequest)) {
    throw new Error('Expected argument of type kaabe.OrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_OrderRequest(buffer_arg) {
  return kaabe_pb.OrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_RegisterDeviceRequest(arg) {
  if (!(arg instanceof kaabe_pb.RegisterDeviceRequest)) {
    throw new Error('Expected argument of type kaabe.RegisterDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_RegisterDeviceRequest(buffer_arg) {
  return kaabe_pb.RegisterDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_ServiceProvider(arg) {
  if (!(arg instanceof kaabe_pb.ServiceProvider)) {
    throw new Error('Expected argument of type kaabe.ServiceProvider');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_ServiceProvider(buffer_arg) {
  return kaabe_pb.ServiceProvider.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_TokenRequest(arg) {
  if (!(arg instanceof kaabe_pb.TokenRequest)) {
    throw new Error('Expected argument of type kaabe.TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_TokenRequest(buffer_arg) {
  return kaabe_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_TokenResponse(arg) {
  if (!(arg instanceof kaabe_pb.TokenResponse)) {
    throw new Error('Expected argument of type kaabe.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_TokenResponse(buffer_arg) {
  return kaabe_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kaabe_UniqueResourceMessage(arg) {
  if (!(arg instanceof kaabe_pb.UniqueResourceMessage)) {
    throw new Error('Expected argument of type kaabe.UniqueResourceMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kaabe_UniqueResourceMessage(buffer_arg) {
  return kaabe_pb.UniqueResourceMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// KaabeService service.
var KaabeServiceService = exports.KaabeServiceService = {
  // Gets a service provider.
getServiceProviders: {
    path: '/kaabe.KaabeService/GetServiceProviders',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetServiceProvidersRequest,
    responseType: kaabe_pb.GetServiceProvidersResponse,
    requestSerialize: serialize_kaabe_GetServiceProvidersRequest,
    requestDeserialize: deserialize_kaabe_GetServiceProvidersRequest,
    responseSerialize: serialize_kaabe_GetServiceProvidersResponse,
    responseDeserialize: deserialize_kaabe_GetServiceProvidersResponse,
  },
  getServiceProviderList: {
    path: '/kaabe.KaabeService/GetServiceProviderList',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetServiceProviderListRequest,
    responseType: kaabe_pb.GetServiceProviderListResponse,
    requestSerialize: serialize_kaabe_GetServiceProviderListRequest,
    requestDeserialize: deserialize_kaabe_GetServiceProviderListRequest,
    responseSerialize: serialize_kaabe_GetServiceProviderListResponse,
    responseDeserialize: deserialize_kaabe_GetServiceProviderListResponse,
  },
  addServiceProvider: {
    path: '/kaabe.KaabeService/AddServiceProvider',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.ServiceProvider,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_ServiceProvider,
    requestDeserialize: deserialize_kaabe_ServiceProvider,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  getServiceProvider: {
    path: '/kaabe.KaabeService/GetServiceProvider',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetServiceProviderRequest,
    responseType: kaabe_pb.GetServiceProviderResponse,
    requestSerialize: serialize_kaabe_GetServiceProviderRequest,
    requestDeserialize: deserialize_kaabe_GetServiceProviderRequest,
    responseSerialize: serialize_kaabe_GetServiceProviderResponse,
    responseDeserialize: deserialize_kaabe_GetServiceProviderResponse,
  },
  updateServiceProvider: {
    path: '/kaabe.KaabeService/UpdateServiceProvider',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.ServiceProvider,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_ServiceProvider,
    requestDeserialize: deserialize_kaabe_ServiceProvider,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  updateServiceProviderConfiguration: {
    path: '/kaabe.KaabeService/UpdateServiceProviderConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.ServiceProvider,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_ServiceProvider,
    requestDeserialize: deserialize_kaabe_ServiceProvider,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  // Categories and menu items.
getMenuItems: {
    path: '/kaabe.KaabeService/GetMenuItems',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.UniqueResourceMessage,
    responseType: kaabe_pb.GetMenuItemsResponse,
    requestSerialize: serialize_kaabe_UniqueResourceMessage,
    requestDeserialize: deserialize_kaabe_UniqueResourceMessage,
    responseSerialize: serialize_kaabe_GetMenuItemsResponse,
    responseDeserialize: deserialize_kaabe_GetMenuItemsResponse,
  },
  // Manage item categories.
addCategory: {
    path: '/kaabe.KaabeService/AddCategory',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.CategoryRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_CategoryRequest,
    requestDeserialize: deserialize_kaabe_CategoryRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  deleteCategory: {
    path: '/kaabe.KaabeService/DeleteCategory',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.CategoryRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_CategoryRequest,
    requestDeserialize: deserialize_kaabe_CategoryRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  updateCategory: {
    path: '/kaabe.KaabeService/UpdateCategory',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.CategoryRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_CategoryRequest,
    requestDeserialize: deserialize_kaabe_CategoryRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  // Manage menu items.
addMenuItem: {
    path: '/kaabe.KaabeService/AddMenuItem',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.MenuItemRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_MenuItemRequest,
    requestDeserialize: deserialize_kaabe_MenuItemRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  deleteMenuItem: {
    path: '/kaabe.KaabeService/DeleteMenuItem',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.MenuItemRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_MenuItemRequest,
    requestDeserialize: deserialize_kaabe_MenuItemRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  updateMenuItem: {
    path: '/kaabe.KaabeService/UpdateMenuItem',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.MenuItemRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_MenuItemRequest,
    requestDeserialize: deserialize_kaabe_MenuItemRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  changeMenuItemStatus: {
    path: '/kaabe.KaabeService/ChangeMenuItemStatus',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.MenuItemRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_MenuItemRequest,
    requestDeserialize: deserialize_kaabe_MenuItemRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  // Manage orders.
getOrders: {
    path: '/kaabe.KaabeService/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetOrdersRequest,
    responseType: kaabe_pb.GetOrdersResponse,
    requestSerialize: serialize_kaabe_GetOrdersRequest,
    requestDeserialize: deserialize_kaabe_GetOrdersRequest,
    responseSerialize: serialize_kaabe_GetOrdersResponse,
    responseDeserialize: deserialize_kaabe_GetOrdersResponse,
  },
  getOrder: {
    path: '/kaabe.KaabeService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.OrderRequest,
    responseType: kaabe_pb.Order,
    requestSerialize: serialize_kaabe_OrderRequest,
    requestDeserialize: deserialize_kaabe_OrderRequest,
    responseSerialize: serialize_kaabe_Order,
    responseDeserialize: deserialize_kaabe_Order,
  },
  addOrder: {
    path: '/kaabe.KaabeService/AddOrder',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.OrderRequest,
    responseType: kaabe_pb.Order,
    requestSerialize: serialize_kaabe_OrderRequest,
    requestDeserialize: deserialize_kaabe_OrderRequest,
    responseSerialize: serialize_kaabe_Order,
    responseDeserialize: deserialize_kaabe_Order,
  },
  deleteOrder: {
    path: '/kaabe.KaabeService/DeleteOrder',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.OrderRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_OrderRequest,
    requestDeserialize: deserialize_kaabe_OrderRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  updateOrder: {
    path: '/kaabe.KaabeService/UpdateOrder',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.OrderRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_OrderRequest,
    requestDeserialize: deserialize_kaabe_OrderRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  updateOrderTableNumber: {
    path: '/kaabe.KaabeService/UpdateOrderTableNumber',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.OrderRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_OrderRequest,
    requestDeserialize: deserialize_kaabe_OrderRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  changeOrderStatus: {
    path: '/kaabe.KaabeService/ChangeOrderStatus',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.OrderRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_OrderRequest,
    requestDeserialize: deserialize_kaabe_OrderRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  // Customers.
getCustomers: {
    path: '/kaabe.KaabeService/GetCustomers',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetPaginatedResourcesRequest,
    responseType: kaabe_pb.GetCustomersResponse,
    requestSerialize: serialize_kaabe_GetPaginatedResourcesRequest,
    requestDeserialize: deserialize_kaabe_GetPaginatedResourcesRequest,
    responseSerialize: serialize_kaabe_GetCustomersResponse,
    responseDeserialize: deserialize_kaabe_GetCustomersResponse,
  },
  // Payments.
getPayments: {
    path: '/kaabe.KaabeService/GetPayments',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetPaginatedResourcesRequest,
    responseType: kaabe_pb.GetPaymentsResponse,
    requestSerialize: serialize_kaabe_GetPaginatedResourcesRequest,
    requestDeserialize: deserialize_kaabe_GetPaginatedResourcesRequest,
    responseSerialize: serialize_kaabe_GetPaymentsResponse,
    responseDeserialize: deserialize_kaabe_GetPaymentsResponse,
  },
  // Messages.
getMessages: {
    path: '/kaabe.KaabeService/GetMessages',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.GetPaginatedResourcesRequest,
    responseType: kaabe_pb.GetMessagesResponse,
    requestSerialize: serialize_kaabe_GetPaginatedResourcesRequest,
    requestDeserialize: deserialize_kaabe_GetPaginatedResourcesRequest,
    responseSerialize: serialize_kaabe_GetMessagesResponse,
    responseDeserialize: deserialize_kaabe_GetMessagesResponse,
  },
  // Images.
getMediaFileToken: {
    path: '/kaabe.KaabeService/GetMediaFileToken',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.TokenRequest,
    responseType: kaabe_pb.TokenResponse,
    requestSerialize: serialize_kaabe_TokenRequest,
    requestDeserialize: deserialize_kaabe_TokenRequest,
    responseSerialize: serialize_kaabe_TokenResponse,
    responseDeserialize: deserialize_kaabe_TokenResponse,
  },
  // Register device.
registerDevice: {
    path: '/kaabe.KaabeService/RegisterDevice',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.RegisterDeviceRequest,
    responseType: kaabe_pb.UniqueResourceMessage,
    requestSerialize: serialize_kaabe_RegisterDeviceRequest,
    requestDeserialize: deserialize_kaabe_RegisterDeviceRequest,
    responseSerialize: serialize_kaabe_UniqueResourceMessage,
    responseDeserialize: deserialize_kaabe_UniqueResourceMessage,
  },
  // Auth.
authExchange: {
    path: '/kaabe.KaabeService/AuthExchange',
    requestStream: false,
    responseStream: false,
    requestType: kaabe_pb.EmptyRequest,
    responseType: kaabe_pb.AuthExchangeMessage,
    requestSerialize: serialize_kaabe_EmptyRequest,
    requestDeserialize: deserialize_kaabe_EmptyRequest,
    responseSerialize: serialize_kaabe_AuthExchangeMessage,
    responseDeserialize: deserialize_kaabe_AuthExchangeMessage,
  },
};

exports.KaabeServiceClient = grpc.makeGenericClientConstructor(KaabeServiceService);
