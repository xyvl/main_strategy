"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCoinsRouter = void 0;
const allCoins_controller_1 = require("../controller/allCoins.controller");
const Router = require('express').Router;
const router = new Router();
router.post('/get_coins', allCoins_controller_1.allCoinsController.getAllCoins);
exports.allCoinsRouter = router;
