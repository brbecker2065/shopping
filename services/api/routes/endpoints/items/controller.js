
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { randomFill } from "crypto";

export default class AuthController {
    constructor(router) {
        router.post("/:id", wrapAsyncFunc(this.createNewItems));
        router.get("/", wrapAsyncFunc(this.getItems))
    }


    async createNewItems(req, res) {
        const { item } = req.body
        console.log(hi)
        res.send([{ itemid: item }, { itemid: rain }, { itemid: Selection, }])
    }

}

     //RTCDtlsTranspotransportationsqrtStateChangedEvent

