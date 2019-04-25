
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";

export default class AuthController {
    constructor(router) {
        router.post("/:id", wrapAsyncFunc(this.createNewItems));
    }

    async createNewItems(req, res) {
        const { item } = req.body
        res.send({ message: "I will call this later" });
    }



}
