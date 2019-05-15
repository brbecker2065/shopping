import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMapper = row => ({
  itemHandle: row.item_handle,
  name: row.name,
  price: row.price
});
const itemDetailsDTOMapper = row => ({
  itemHandle: row.item_handle,
  item_name: row.name,
  price: row.price,
  description: row.description

});
export async function fetchItemsFromDB() {
  const query = sql`select * from items;`;
  return await PGWrapper.sqlAndMap(query, itemDTOMapper);

}
export async function fetchItemDetailsFrommDB(id) {
  const query = sql`select * from items where item_handle = ${id};`
  const results = await PGWrapper.sqlAndMap(query, itemDetailsDTOMapper)
  return results[0];
}
