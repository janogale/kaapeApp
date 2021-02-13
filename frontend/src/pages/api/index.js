// Fake users data

// service providers route

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json({
    root: "Kaape App Root",
  });
}
