const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { promisify } = require("util");

const PROTO_PATH = path.join(process.env.protosDir, "kaabe.proto");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: false,
  longs: String,
  //  enums: String,
  defaults: true,
  oneofs: true,
});
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).kaabe;
// The protoDescriptor object has the full package hierarchy
// var routeguide = protoDescriptor.routeguide;

const target = "staff.kaabeapp.com:8443";
var client = new protoDescriptor.KaabeService(
  target,
  grpc.credentials.createSsl()
);

// const stub = new routeguide.RouteGuide('https://localhost:5001');

// client.GetServiceProvider({guid: spId}, (err, data) => {
//   if (err) throw err;

//   let serviceProvider = serviceProviders.filter((sp) => sp.id == spId);
//   res.status(200).json(serviceProvider[0]);
//   });

const getServiceProvider = promisify(client.GetServiceProvider).bind(client);
const getServiceProviderList = promisify(client.GetServiceProviderList).bind(client);
const addOrder = promisify(client.AddOrder).bind(client);

export {
  getServiceProvider,
  getServiceProviderList,
  addOrder
};
