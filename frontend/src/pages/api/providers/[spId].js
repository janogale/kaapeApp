import { getServiceProvider } from "../../../service/kaabe";
// const gspr = require('../../../service/getserviceproviderrequest');

// service providers route

export default async function handler(req, res) {
  const {
    query: { spId },
  } = req;

  var provider = await getServiceProvider({ guid: spId, includeItems: true });
  res.status(200).json(provider);

  // client.GetServiceProvider({guid: spId}, (err, data) => {
  //   if (err) throw err;
}
