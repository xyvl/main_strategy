import {allCoinsController} from "../controller/allCoins.controller";
const Router = require('express').Router;
const router = new Router();

router.get('/get_coins', allCoinsController.getAllCoins)

export const allCoinsRouter = router;