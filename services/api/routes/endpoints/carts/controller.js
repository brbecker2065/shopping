import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { addItemToCart } from '../../commands/carts'

export default class ItemsController {
    constructor(router) {
        router.get('/:userHandle'), wrapAsyncFunc(this.getCartForUser)
        router.post("/:items/add", wrapAsyncFunc(this.addItemToCart));
    }

    async getCartForUser(req, res) {

        console.log(
            "we haven't finished this endpoint"

        );
    }


    async addItemToCart(req, res) {
        const { items } = req.body;
        const { userHandle } = req.user
        const results = await addItemToCart(userHandle, items);
        res.send({ cart: results });

    }
}