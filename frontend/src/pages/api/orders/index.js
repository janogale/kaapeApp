import { addOrder, getOrders } from "../../../service/kaabe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Clean order rows.
    const rowsData = JSON.parse(data.orderRows);
    if (!rowsData || rowsData.length < 1) {
      res.status(400).json({});
      return;
    }

    // extra customer name, table and notes from body data.
    //const { customerNotes, customerName, tableNumber } = data;

    const clearedRows = [];

    for (const row of rowsData) {
      const { id, name, amount, saleUnitPrice } = row;

      clearedRows.push({
        id,
        name,
        amount,
        saleUnitPrice,
      });
    }

    data.orderRows = JSON.stringify(clearedRows);

    var resp = await addOrder(data.spId, data, req.headers["authorization"]);
    res.status(200).json(resp);
  } else {
    var orders = await getOrders(req.headers["authorization"]);
    res.status(400).json(orders);
  }
}
