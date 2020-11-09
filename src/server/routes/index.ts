import * as express from "express";
import chirpsrouter from "./chirps";

const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

router.use("/chirps", chirpsrouter);

export default router;