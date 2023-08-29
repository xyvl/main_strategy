"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataChangeRouter = void 0;
const dataChange_controller_1 = require("../controller/dataChange.controller");
const Router = require('express').Router;
const router = new Router();
router.get('/write_finally', dataChange_controller_1.dataChangeController.getAndWriteInfoRandomCoinOneBarInOneStreams);
exports.dataChangeRouter = router;
