
import { authExchange } from '../../../service/kaabe';


export default async function handler(req, res) {
  const bearer = req.headers['authorization'];
  var resp = await authExchange(bearer);
  res.status(200).json(resp);
}
