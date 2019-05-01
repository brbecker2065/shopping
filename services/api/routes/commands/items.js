import { ErrorWithStatus } from "../../utils/errors"
import { fetchItemsFromDB } from "../repositories/items"


let loggedIn = true;
export async function fetchItems() {
    if (loggedIn) {
        try {
            const results = await fetchItemsFromDB()
            return results
        } catch (err) {
            throw new StatusErro({ msg: 'DB error, status: 500' })
        }

    } else {
        throw new ErrorWithStatus({ msg: "Please login", status: 423 });
    }

}

export async function createItem(item) {
    console.log("New item I am trying to create", item);
    if (!item) {
        throw new ErrorWithStatus({ msg: "Please Provide an item", status: 400 })
    }
}