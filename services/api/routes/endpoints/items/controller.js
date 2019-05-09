
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { randomFill } from "crypto";
import { fetchItems, fetchItemDetails } from "../../commands/items";

export default class ItemsController {
    constructor(router) {
        // router.post("/:id", wrapAsyncFunc(this.createNewItem));
        router.get("/", wrapAsyncFunc(this.getAllItems));

    }

    async getAllItems(req, res) {
        console.log('hit getAllItems')
        const items = await fetchItems();
        res.send({ items })
    }


    // async createNewItems(req, res) {
    //     const { item } = req.body
    //     console.log(hi)
    //     res.send([{ itemid: item }, { itemid: rain }, { itemid: Selection, }])
    // }

}

     //RTCDtlsTranspotransportationsqrtStateChangedEvent

