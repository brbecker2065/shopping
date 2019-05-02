import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMAPPER = row => ({
    ItemHandle: row.item_handle,
    item: row.item,
    price: row.price

});

export async function fetchItemsFromDB() {
    const query = sql`select * from items;`;
    return (await PGWrapper.sqlAndMap(query, itemDTOMAPPER));

}
