import {createDataController} from "../controller/createData.controller";
const Router = require('express').Router;
const router = new Router();

router.get('/get_coins', createDataController.createFileForAllCoins)
router.get('/create_file_for_each_coin', createDataController.createFileForEachCoin)
router.get('/create_file_first_strategy', createDataController.createFileFirstStrategy)
router.get('/create_file_for_coins_less_than_600_days_old', createDataController.createFileForCoinsLessThan600DaysOld)

export const createDataRouter = router;