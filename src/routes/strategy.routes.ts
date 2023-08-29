import {strategyController} from "../controller/strategy.controller";
const Router = require('express').Router;
const router = new Router();

router.get('/long_strategy', strategyController.longStrategy)
router.get('/short_strategy', strategyController.shortStrategy)
router.get('/listing_strategy', strategyController.listingStrategy)
router.get('/checking_the_strategy', strategyController.checkingTheStrategy)

export const strategyRouter = router;