import {
  getCreatorInfo,
  getCreatorsList
} from "../../commands/creators";
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { createBrotliDecompress } from "zlib";

export default class AuthController {
  constructor(router) {
    router.get("/:id", wrapAsyncFunc(this.creatorSpotlight));
    router.get("/", wrapAsyncFunc(this.creatorsList));
    router.put("/:id", wrapAsyncFunc(this.updateCreator));

    Async  updateCreator(req, res)
    const { id } = reg.params;
    const { creator } = reg.body;
    console.log(
      "I am responding to a put reuest on /creators/:id",
      creator,
      id
    );
    res.send({ creator })
  }
  Async creatorSpotlight(req, res)
const { id } = req.params
console.log("ID", id, req.params)
const creator = await getCreatorInfo(id);
res.send({ creator });
    }




Async  creatorsList(req, res)
const creators = await getCreatorsList();
res.send({ creators })
