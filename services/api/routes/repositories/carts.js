import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const cartDTO = row => ({
    itemid: row.item_id
});

export async function addItemsToCartForUserInDB(userHandle, items) {
    const item = items[0];
    const statement = sql`
    insert into cart values(
        $(userHandle),
        $(item.id),
        true,
        $(item.quantity)
    )
    on conflict
    on constraint cart_pkey
    do update set quantity = excluded.quantity, active = true
    returning *;`

    await PGWrapper.sql(statement);

    const query = sql`
    select sum(quantity) as count 
    from cart where user_handle = ${userHandle}
    and active = true;`

    const results = await PGWrapper.sqlAndMap(query, cartDTO);
    return results(0);
}
