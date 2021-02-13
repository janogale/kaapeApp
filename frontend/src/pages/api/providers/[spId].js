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

export default function handler(req, res) {
  const {
    query: { spId },
  } = req;

  let serviceProvider = serviceProviders.filter((sp) => sp.id == spId);
  res.status(200).json(serviceProvider[0]);
}
