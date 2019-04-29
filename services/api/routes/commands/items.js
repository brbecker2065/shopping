import { ErrorWithStatus } from "../../utils/errors"


let loggedIn = true

export async function fetchAllItems(item) {
    if (loggedIn) {
        return [{}, {}, {}]
    }
    else {
        throw new ErrorWithStatus({ msg: "Please login", status: 423 });
    }

}
export async function createItem(item) {
    console.log("New item I am trying to create", item);
    if (!item) {
        throw new ErrorWithStatus({ msg: "Please Provide an item", status: 400 })
    }
}