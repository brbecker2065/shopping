import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMAPPER = row => ({
  itemHandle: row.item_handle,
  item: row.item,
  price: row.price
});
const itemDetailsDTOMapper = row => ({
  itemHandle: row.item_handle,
  item: row.item,
  price: row.price,
  description: row.description

});
export async function fetchItemsFromDB() {
  const query = sql`select * from items;`;
  return await PGWrapper.sqlAndMap(query, itemDTOMAPPER);

}
export async function fetchItemDetailsFrommDB(id) {
  const query = sql`select * from items where item_handle = ${id};`
  return (await PGWrapper.sqlAndMap(query, itemDetailsDTOMapper))[0];
}
