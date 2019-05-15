import { StatusError } from "../../utils/errors"
import { fetchItemsFromDB, fetchItemDetailsFrommDB } from "../repositories/items"


let loggedIn = true;


export async function fetchItems() {

    if (loggedIn) {

        try {
            // console.log('hit fetch items LOGGED IN TRY')
            const results = await fetchItemsFromDB()
            console.log('from fetchItems', results)
            return results
        } catch (err) {
            console.log('from error', err)
            throw new StatusError({ msg: 'DB error', status: 500 })
        }

    } else {
        throw new StatusError({ msg: "User not logged in", status: 400 });
    }

}
export async function fetchItemDetails(id) {
    //do bussiness logic
    const item = await fetchItemDetailsFrommDB(id);
    return item;
}
//export async function createItem(item) {
  //  console.log("New item I am trying to create", item);
    //if (!item) {
      //  throw new ErrorWithStatus({ msg: "Please Provide an item", status: 400 })
   // }
//}
