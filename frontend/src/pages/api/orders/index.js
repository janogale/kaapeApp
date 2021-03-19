import { addOrder } from "../../../service/kaabe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Clean order rows.
    const rowsData = JSON.parse(data.orderRows);
    if(!rowsData || rowsData.length < 1) {
      res.status(400).json({});
      return;
    }

    const clearedRows = [];
    for (const row of rowsData) {
      const {id, name, amount, saleUnitPrice, additionalNotes : customerNotes} = row;
      clearedRows.push({
        id, name, amount, saleUnitPrice, customerNotes
      })
    }
    data.orderRows = JSON.stringify(clearedRows);

    var resp = await addOrder(data.spId, data);
    res.status(200).json(resp);
  } else {
    res.status(400).json({});
  }
}
