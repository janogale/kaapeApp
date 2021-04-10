import { getOrder } from "../../../service/kaabe";

export default async function handler(req, res) {
  const {
    query: { orderId },
  } = req;

  var order = await getOrder(orderId, req.headers['authorization']);
  res.status(200).json(order);
}
