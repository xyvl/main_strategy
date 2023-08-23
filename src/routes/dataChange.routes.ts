import { dataChangeController } from "../controller/dataChange.controller"
const Router = require('express').Router
const router = new Router()

router.get('/get_and_write_info_random_coin_five_bar', dataChangeController.getAndWriteInfoRandomCoinFiveBar)
router.get('/get_and_write_info_random_coin_five_bar_in_three_streams', dataChangeController.getAndWriteInfoRandomCoinFiveBarInThreeStreams)

export const dataChangeRouter = router