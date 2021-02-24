import { addOrder } from "../../../service/kaabe";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const data = req.body;
    console.log(addOrder)
    var resp = await addOrder({providerId: data.spId, item: data});
    res.status(200).json(resp);
  } else {
    res.status(400).json({})
  }
}