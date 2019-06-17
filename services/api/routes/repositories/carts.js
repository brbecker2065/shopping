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


/*export async function placeUserOrderInDb(userHandle) {
    let placeOrder = sql`
    with new_order as (
    insert into orders (buyer_handle) values (${userHandle}) returning *
    )
    insert into order_items (
    select new_order.order_id as order_id, c.item_id, c.quantity
    from cart c
    left join new_order on new_order.buyer_handle = c.user_handle
    where c.user_handle = ${userHandle} and c.active = true
    );
    `;
    let updateCart = sql`update cart set active = false where user_handle = ${userHandle} and active = true;`;
    await PGWrapper.sqlTransaction(placeOrder, updateCart);
    return;
   }*/