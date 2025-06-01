import { Hono } from "hono";
import * as join from "../controller/joins.controller.js";

const router = new Hono();

router.get("/inner", join.innerJoin);
router.get("/left", join.leftJoin);
router.get("/right", join.rightJoin);
router.get("/outer", join.outerJoin);
router.get("/cross", join.crossJoin);
router.get("/practice", join.practiceJoin);

export default router;
