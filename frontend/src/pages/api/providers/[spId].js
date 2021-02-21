

import { getServiceProvider } from '../../../service/kaabe';
// const gspr = require('../../../service/getserviceproviderrequest');


// Fake users data
const serviceProviders = [
  {
    id: 100,
    guid: 100,
    currency: "usd",
    businessType: "cafeteria",
    serviceLevel: 2,
    name: "Nomad Cafe",
    description: "Drink with joy",
    phoneNumber: "0631235422",
    website: "www.cafe.com",
    configuration: null,
    city: "Hargeisa",
    location: "downtown",
    picture: "./images/cafe.png",
  },
  {
    id: 101,
    guid: 101,
    currency: "usd",
    businessType: "cafeteria",
    serviceLevel: 2,
    name: "Mudakar Coffee",
    description: "Drink with joy",
    phoneNumber: "0631235422",
    website: "www.cafe.com",
    configuration: null,
    city: "Hargeisa",
    location: "downtown",
    picture: "./images/cafe.png",
  },
  {
    id: 102,
    guid: 102,
    currency: "usd",
    businessType: "cafeteria",
    serviceLevel: 2,
    name: "Cafe Barbera",
    description: "Drink with joy",
    phoneNumber: "0631235422",
    website: "www.cafe.com",
    configuration: null,
    city: "Hargeisa",
    location: "downtown",
    picture: "./images/cafe.png",
  },
];

// service providers route

export default async function handler(req, res) {
  const {
    query: { spId },
  } = req;

  var provider = await getServiceProvider({guid: spId, includeItems: true});
  res.status(200).json(provider);

  // client.GetServiceProvider({guid: spId}, (err, data) => {
  //   if (err) throw err;

  //   console.log("SP", data);
  //   let serviceProvider = serviceProviders.filter((sp) => sp.id == spId);
  //   });
}
