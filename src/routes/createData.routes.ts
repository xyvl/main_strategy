import {createDataController} from "../controller/createData.controller";
const Router = require('express').Router;
const router = new Router();

router.get('/get_coins', createDataController.createFileForAllCoins)
router.get('/create_file_for_each_coin', createDataController.createFileForEachCoin)
router.post('/create_file_strategy', createDataController.createFileStrategy)

export const createDataRouter = router;