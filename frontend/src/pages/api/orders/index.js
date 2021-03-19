import { addOrder } from "../../../service/kaabe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    var resp = await addOrder(data.spId, data);
    res.status(200).json(resp);
  } else {
    res.status(400).json({});
  }
}
