import { addItemsToCartForUserInDB } from '../repositories/carts'

export async function addItemToCart(userHandle, items) {
    // business logic to see if user can carr out this action




    //yes they can do it so call our db wrapper
    return addItemsToCartForUserInDB(userHandle, items)
}