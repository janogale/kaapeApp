// Fake users data

// service providers route

let data = {
  name: "KaabeApp",
  version: 1.0,
};
export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(data);
}
