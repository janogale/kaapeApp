/**
 * @fileoverview gRPC-Web generated client stub for kaabe
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.kaabe = require('./kaabe_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kaabe.KaabeServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kaabe.KaabeServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetServiceProvidersRequest,
 *   !proto.kaabe.GetServiceProvidersResponse>}
 */
const methodDescriptor_KaabeService_GetServiceProviders = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetServiceProviders',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetServiceProvidersRequest,
  proto.kaabe.GetServiceProvidersResponse,
  /**
   * @param {!proto.kaabe.GetServiceProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetServiceProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetServiceProvidersRequest,
 *   !proto.kaabe.GetServiceProvidersResponse>}
 */
const methodInfo_KaabeService_GetServiceProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetServiceProvidersResponse,
  /**
   * @param {!proto.kaabe.GetServiceProvidersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetServiceProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetServiceProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetServiceProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetServiceProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getServiceProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetServiceProviders',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetServiceProviders,
      callback);
};


/**
 * @param {!proto.kaabe.GetServiceProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetServiceProvidersResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getServiceProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetServiceProviders',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetServiceProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetServiceProviderListRequest,
 *   !proto.kaabe.GetServiceProviderListResponse>}
 */
const methodDescriptor_KaabeService_GetServiceProviderList = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetServiceProviderList',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetServiceProviderListRequest,
  proto.kaabe.GetServiceProviderListResponse,
  /**
   * @param {!proto.kaabe.GetServiceProviderListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetServiceProviderListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetServiceProviderListRequest,
 *   !proto.kaabe.GetServiceProviderListResponse>}
 */
const methodInfo_KaabeService_GetServiceProviderList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetServiceProviderListResponse,
  /**
   * @param {!proto.kaabe.GetServiceProviderListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetServiceProviderListResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetServiceProviderListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetServiceProviderListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetServiceProviderListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getServiceProviderList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetServiceProviderList',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetServiceProviderList,
      callback);
};


/**
 * @param {!proto.kaabe.GetServiceProviderListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetServiceProviderListResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getServiceProviderList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetServiceProviderList',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetServiceProviderList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.ServiceProvider,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_AddServiceProvider = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/AddServiceProvider',
  grpc.web.MethodType.UNARY,
  proto.kaabe.ServiceProvider,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.ServiceProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.ServiceProvider,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_AddServiceProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.ServiceProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.ServiceProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.addServiceProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/AddServiceProvider',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddServiceProvider,
      callback);
};


/**
 * @param {!proto.kaabe.ServiceProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.addServiceProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/AddServiceProvider',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddServiceProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetServiceProviderRequest,
 *   !proto.kaabe.GetServiceProviderResponse>}
 */
const methodDescriptor_KaabeService_GetServiceProvider = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetServiceProvider',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetServiceProviderRequest,
  proto.kaabe.GetServiceProviderResponse,
  /**
   * @param {!proto.kaabe.GetServiceProviderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetServiceProviderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetServiceProviderRequest,
 *   !proto.kaabe.GetServiceProviderResponse>}
 */
const methodInfo_KaabeService_GetServiceProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetServiceProviderResponse,
  /**
   * @param {!proto.kaabe.GetServiceProviderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetServiceProviderResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetServiceProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetServiceProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetServiceProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getServiceProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetServiceProvider',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetServiceProvider,
      callback);
};


/**
 * @param {!proto.kaabe.GetServiceProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetServiceProviderResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getServiceProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetServiceProvider',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetServiceProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.ServiceProvider,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_UpdateServiceProvider = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/UpdateServiceProvider',
  grpc.web.MethodType.UNARY,
  proto.kaabe.ServiceProvider,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.ServiceProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.ServiceProvider,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_UpdateServiceProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.ServiceProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.ServiceProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.updateServiceProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateServiceProvider',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateServiceProvider,
      callback);
};


/**
 * @param {!proto.kaabe.ServiceProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.updateServiceProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateServiceProvider',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateServiceProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.ServiceProvider,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_UpdateServiceProviderConfiguration = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/UpdateServiceProviderConfiguration',
  grpc.web.MethodType.UNARY,
  proto.kaabe.ServiceProvider,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.ServiceProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.ServiceProvider,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_UpdateServiceProviderConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.ServiceProvider} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.ServiceProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.updateServiceProviderConfiguration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateServiceProviderConfiguration',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateServiceProviderConfiguration,
      callback);
};


/**
 * @param {!proto.kaabe.ServiceProvider} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.updateServiceProviderConfiguration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateServiceProviderConfiguration',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateServiceProviderConfiguration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.UniqueResourceMessage,
 *   !proto.kaabe.GetMenuItemsResponse>}
 */
const methodDescriptor_KaabeService_GetMenuItems = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetMenuItems',
  grpc.web.MethodType.UNARY,
  proto.kaabe.UniqueResourceMessage,
  proto.kaabe.GetMenuItemsResponse,
  /**
   * @param {!proto.kaabe.UniqueResourceMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetMenuItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.UniqueResourceMessage,
 *   !proto.kaabe.GetMenuItemsResponse>}
 */
const methodInfo_KaabeService_GetMenuItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetMenuItemsResponse,
  /**
   * @param {!proto.kaabe.UniqueResourceMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetMenuItemsResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.UniqueResourceMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetMenuItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetMenuItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getMenuItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetMenuItems',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetMenuItems,
      callback);
};


/**
 * @param {!proto.kaabe.UniqueResourceMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetMenuItemsResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getMenuItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetMenuItems',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetMenuItems);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.CategoryRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_AddCategory = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/AddCategory',
  grpc.web.MethodType.UNARY,
  proto.kaabe.CategoryRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.CategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.CategoryRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_AddCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.CategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.CategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.addCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/AddCategory',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddCategory,
      callback);
};


/**
 * @param {!proto.kaabe.CategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.addCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/AddCategory',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.CategoryRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_DeleteCategory = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/DeleteCategory',
  grpc.web.MethodType.UNARY,
  proto.kaabe.CategoryRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.CategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.CategoryRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_DeleteCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.CategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.CategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.deleteCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/DeleteCategory',
      request,
      metadata || {},
      methodDescriptor_KaabeService_DeleteCategory,
      callback);
};


/**
 * @param {!proto.kaabe.CategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.deleteCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/DeleteCategory',
      request,
      metadata || {},
      methodDescriptor_KaabeService_DeleteCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.CategoryRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_UpdateCategory = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/UpdateCategory',
  grpc.web.MethodType.UNARY,
  proto.kaabe.CategoryRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.CategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.CategoryRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_UpdateCategory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.CategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.CategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.updateCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateCategory,
      callback);
};


/**
 * @param {!proto.kaabe.CategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.updateCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateCategory',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_AddMenuItem = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/AddMenuItem',
  grpc.web.MethodType.UNARY,
  proto.kaabe.MenuItemRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_AddMenuItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.addMenuItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/AddMenuItem',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddMenuItem,
      callback);
};


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.addMenuItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/AddMenuItem',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddMenuItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_DeleteMenuItem = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/DeleteMenuItem',
  grpc.web.MethodType.UNARY,
  proto.kaabe.MenuItemRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_DeleteMenuItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.deleteMenuItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/DeleteMenuItem',
      request,
      metadata || {},
      methodDescriptor_KaabeService_DeleteMenuItem,
      callback);
};


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.deleteMenuItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/DeleteMenuItem',
      request,
      metadata || {},
      methodDescriptor_KaabeService_DeleteMenuItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_UpdateMenuItem = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/UpdateMenuItem',
  grpc.web.MethodType.UNARY,
  proto.kaabe.MenuItemRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_UpdateMenuItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.updateMenuItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateMenuItem',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateMenuItem,
      callback);
};


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.updateMenuItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateMenuItem',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateMenuItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_ChangeMenuItemStatus = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/ChangeMenuItemStatus',
  grpc.web.MethodType.UNARY,
  proto.kaabe.MenuItemRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.MenuItemRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_ChangeMenuItemStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.MenuItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.changeMenuItemStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/ChangeMenuItemStatus',
      request,
      metadata || {},
      methodDescriptor_KaabeService_ChangeMenuItemStatus,
      callback);
};


/**
 * @param {!proto.kaabe.MenuItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.changeMenuItemStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/ChangeMenuItemStatus',
      request,
      metadata || {},
      methodDescriptor_KaabeService_ChangeMenuItemStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetOrdersRequest,
 *   !proto.kaabe.GetOrdersResponse>}
 */
const methodDescriptor_KaabeService_GetOrders = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetOrders',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetOrdersRequest,
  proto.kaabe.GetOrdersResponse,
  /**
   * @param {!proto.kaabe.GetOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetOrdersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetOrdersRequest,
 *   !proto.kaabe.GetOrdersResponse>}
 */
const methodInfo_KaabeService_GetOrders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetOrdersResponse,
  /**
   * @param {!proto.kaabe.GetOrdersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetOrdersResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetOrdersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetOrdersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getOrders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetOrders',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetOrders,
      callback);
};


/**
 * @param {!proto.kaabe.GetOrdersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetOrdersResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getOrders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetOrders',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetOrders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.Order>}
 */
const methodDescriptor_KaabeService_GetOrder = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetOrder',
  grpc.web.MethodType.UNARY,
  proto.kaabe.OrderRequest,
  proto.kaabe.Order,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.Order.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.Order>}
 */
const methodInfo_KaabeService_GetOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.Order,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.Order.deserializeBinary
);


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetOrder,
      callback);
};


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.Order>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.Order>}
 */
const methodDescriptor_KaabeService_AddOrder = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/AddOrder',
  grpc.web.MethodType.UNARY,
  proto.kaabe.OrderRequest,
  proto.kaabe.Order,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.Order.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.Order>}
 */
const methodInfo_KaabeService_AddOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.Order,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.Order.deserializeBinary
);


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.addOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/AddOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddOrder,
      callback);
};


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.Order>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.addOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/AddOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AddOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_DeleteOrder = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/DeleteOrder',
  grpc.web.MethodType.UNARY,
  proto.kaabe.OrderRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_DeleteOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.deleteOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/DeleteOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_DeleteOrder,
      callback);
};


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.deleteOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/DeleteOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_DeleteOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_UpdateOrder = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/UpdateOrder',
  grpc.web.MethodType.UNARY,
  proto.kaabe.OrderRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_UpdateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.updateOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateOrder,
      callback);
};


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.updateOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateOrder',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_UpdateOrderTableNumber = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/UpdateOrderTableNumber',
  grpc.web.MethodType.UNARY,
  proto.kaabe.OrderRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_UpdateOrderTableNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.updateOrderTableNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateOrderTableNumber',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateOrderTableNumber,
      callback);
};


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.updateOrderTableNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/UpdateOrderTableNumber',
      request,
      metadata || {},
      methodDescriptor_KaabeService_UpdateOrderTableNumber);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_ChangeOrderStatus = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/ChangeOrderStatus',
  grpc.web.MethodType.UNARY,
  proto.kaabe.OrderRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.OrderRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_ChangeOrderStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.OrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.changeOrderStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/ChangeOrderStatus',
      request,
      metadata || {},
      methodDescriptor_KaabeService_ChangeOrderStatus,
      callback);
};


/**
 * @param {!proto.kaabe.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.changeOrderStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/ChangeOrderStatus',
      request,
      metadata || {},
      methodDescriptor_KaabeService_ChangeOrderStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetPaginatedResourcesRequest,
 *   !proto.kaabe.GetCustomersResponse>}
 */
const methodDescriptor_KaabeService_GetCustomers = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetCustomers',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetPaginatedResourcesRequest,
  proto.kaabe.GetCustomersResponse,
  /**
   * @param {!proto.kaabe.GetPaginatedResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetCustomersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetPaginatedResourcesRequest,
 *   !proto.kaabe.GetCustomersResponse>}
 */
const methodInfo_KaabeService_GetCustomers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetCustomersResponse,
  /**
   * @param {!proto.kaabe.GetPaginatedResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetCustomersResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetPaginatedResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetCustomersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetCustomersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getCustomers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetCustomers',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetCustomers,
      callback);
};


/**
 * @param {!proto.kaabe.GetPaginatedResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetCustomersResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getCustomers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetCustomers',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetCustomers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetPaginatedResourcesRequest,
 *   !proto.kaabe.GetPaymentsResponse>}
 */
const methodDescriptor_KaabeService_GetPayments = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetPayments',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetPaginatedResourcesRequest,
  proto.kaabe.GetPaymentsResponse,
  /**
   * @param {!proto.kaabe.GetPaginatedResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetPaymentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetPaginatedResourcesRequest,
 *   !proto.kaabe.GetPaymentsResponse>}
 */
const methodInfo_KaabeService_GetPayments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetPaymentsResponse,
  /**
   * @param {!proto.kaabe.GetPaginatedResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetPaymentsResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetPaginatedResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetPaymentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetPaymentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getPayments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetPayments',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetPayments,
      callback);
};


/**
 * @param {!proto.kaabe.GetPaginatedResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetPaymentsResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getPayments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetPayments',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetPayments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.GetPaginatedResourcesRequest,
 *   !proto.kaabe.GetMessagesResponse>}
 */
const methodDescriptor_KaabeService_GetMessages = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetMessages',
  grpc.web.MethodType.UNARY,
  proto.kaabe.GetPaginatedResourcesRequest,
  proto.kaabe.GetMessagesResponse,
  /**
   * @param {!proto.kaabe.GetPaginatedResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetMessagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.GetPaginatedResourcesRequest,
 *   !proto.kaabe.GetMessagesResponse>}
 */
const methodInfo_KaabeService_GetMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetMessagesResponse,
  /**
   * @param {!proto.kaabe.GetPaginatedResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetMessagesResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.GetPaginatedResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetMessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetMessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetMessages',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetMessages,
      callback);
};


/**
 * @param {!proto.kaabe.GetPaginatedResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetMessagesResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetMessages',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.TokenRequest,
 *   !proto.kaabe.TokenResponse>}
 */
const methodDescriptor_KaabeService_GetMediaFileToken = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetMediaFileToken',
  grpc.web.MethodType.UNARY,
  proto.kaabe.TokenRequest,
  proto.kaabe.TokenResponse,
  /**
   * @param {!proto.kaabe.TokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.TokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.TokenRequest,
 *   !proto.kaabe.TokenResponse>}
 */
const methodInfo_KaabeService_GetMediaFileToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.TokenResponse,
  /**
   * @param {!proto.kaabe.TokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.TokenResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.TokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.TokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.TokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getMediaFileToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetMediaFileToken',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetMediaFileToken,
      callback);
};


/**
 * @param {!proto.kaabe.TokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.TokenResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getMediaFileToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetMediaFileToken',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetMediaFileToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.RegisterDeviceRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodDescriptor_KaabeService_RegisterDevice = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/RegisterDevice',
  grpc.web.MethodType.UNARY,
  proto.kaabe.RegisterDeviceRequest,
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.RegisterDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.RegisterDeviceRequest,
 *   !proto.kaabe.UniqueResourceMessage>}
 */
const methodInfo_KaabeService_RegisterDevice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.UniqueResourceMessage,
  /**
   * @param {!proto.kaabe.RegisterDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.UniqueResourceMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.RegisterDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.UniqueResourceMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.UniqueResourceMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.registerDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/RegisterDevice',
      request,
      metadata || {},
      methodDescriptor_KaabeService_RegisterDevice,
      callback);
};


/**
 * @param {!proto.kaabe.RegisterDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.UniqueResourceMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.registerDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/RegisterDevice',
      request,
      metadata || {},
      methodDescriptor_KaabeService_RegisterDevice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.EmptyRequest,
 *   !proto.kaabe.AuthExchangeMessage>}
 */
const methodDescriptor_KaabeService_AuthExchange = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/AuthExchange',
  grpc.web.MethodType.UNARY,
  proto.kaabe.EmptyRequest,
  proto.kaabe.AuthExchangeMessage,
  /**
   * @param {!proto.kaabe.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.AuthExchangeMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.EmptyRequest,
 *   !proto.kaabe.AuthExchangeMessage>}
 */
const methodInfo_KaabeService_AuthExchange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.AuthExchangeMessage,
  /**
   * @param {!proto.kaabe.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.AuthExchangeMessage.deserializeBinary
);


/**
 * @param {!proto.kaabe.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.AuthExchangeMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.AuthExchangeMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.authExchange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/AuthExchange',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AuthExchange,
      callback);
};


/**
 * @param {!proto.kaabe.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.AuthExchangeMessage>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.authExchange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/AuthExchange',
      request,
      metadata || {},
      methodDescriptor_KaabeService_AuthExchange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaabe.UniqueResourceMessage,
 *   !proto.kaabe.GetStatsResponse>}
 */
const methodDescriptor_KaabeService_GetStats = new grpc.web.MethodDescriptor(
  '/kaabe.KaabeService/GetStats',
  grpc.web.MethodType.UNARY,
  proto.kaabe.UniqueResourceMessage,
  proto.kaabe.GetStatsResponse,
  /**
   * @param {!proto.kaabe.UniqueResourceMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetStatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaabe.UniqueResourceMessage,
 *   !proto.kaabe.GetStatsResponse>}
 */
const methodInfo_KaabeService_GetStats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaabe.GetStatsResponse,
  /**
   * @param {!proto.kaabe.UniqueResourceMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaabe.GetStatsResponse.deserializeBinary
);


/**
 * @param {!proto.kaabe.UniqueResourceMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaabe.GetStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaabe.GetStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaabe.KaabeServiceClient.prototype.getStats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaabe.KaabeService/GetStats',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetStats,
      callback);
};


/**
 * @param {!proto.kaabe.UniqueResourceMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaabe.GetStatsResponse>}
 *     Promise that resolves to the response
 */
proto.kaabe.KaabeServicePromiseClient.prototype.getStats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaabe.KaabeService/GetStats',
      request,
      metadata || {},
      methodDescriptor_KaabeService_GetStats);
};


module.exports = proto.kaabe;

