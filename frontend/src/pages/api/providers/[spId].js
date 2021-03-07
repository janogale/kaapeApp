import { getServiceProvider } from "../../../service/kaabe";

export default async function handler(req, res) {
  const {
    query: { spId },
  } = req;

  var provider = await getServiceProvider({ guid: spId, includeItems: true });
  res.status(200).json(provider);
}
