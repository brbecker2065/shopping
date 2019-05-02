import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMAPPER = row => ({
    ItemHandle: row.item_handle,
    name: row.name,
    price: row.price

});

export async function fetchUserByEmail() {
    const query = sql`select * from ITEMS;`;
    return (await PGWrapper.sqlAndMap(query, itemDTOMAPPER));

}
