// Fake users data
const serviceProviders = [
  {
    id: "a4337c7a-68b2-45f8-827d-8e4389d5eb51",
    name: "Daryeel Hotel",
  },
  {
    id: "a4337c7a-68b2-45f8-827d-8e4389d5eb66",
    name: "Daryeel Hotel",
  },
];

// service providers route

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(serviceProviders);
}
