import { dataChangeController } from "../controller/dataChange.controller"
const Router = require('express').Router
const router = new Router()

router.get('/write_finally', dataChangeController.getAndWriteInfoRandomCoinOneBarInOneStreams)

export const dataChangeRouter = router