import { getServiceProviderList } from "../../../service/kaabe";

// service providers route

export default async function handler(req, res) {
  console.log('getServiceProviderListxxx:', getServiceProviderList)
  var providerList = await getServiceProviderList();
  res.status(200).json(providerList);
}
