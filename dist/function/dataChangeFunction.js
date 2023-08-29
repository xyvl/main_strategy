"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstDay = exports.getDayLive = exports.getListingTime = exports.emptyCoin = exports.requestFunction = void 0;
const axios_1 = __importDefault(require("axios"));
const createDayArray_1 = require("./createDayArray");
const fs_1 = __importDefault(require("fs"));
const requestFunction = (time, symbol, timeIsNow, finallyArray) => __awaiter(void 0, void 0, void 0, function* () {
    const request1 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 0);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request2 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 1);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request3 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 2);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request4 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 3);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request5 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 4);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request6 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 5);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request7 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 6);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request8 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 7);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request9 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 8);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request10 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 9);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request11 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 10);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request12 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 11);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request13 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 12);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request14 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 13);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    const request15 = new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        const localTime = (time + 86400000 * 14);
        if (timeIsNow - localTime > 86400000) {
            const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`);
            const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data;
            res((0, createDayArray_1.createDayArray)(data, funding));
        }
        else {
            res(null);
        }
    }));
    yield Promise.all([request1, request2, request3, request4, request5, request6, request7, request8, request9, request10, request11, request12, request13, request14, request15]).then((data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === null) {
                continue;
            }
            finallyArray.push(data[i]);
        }
    });
});
exports.requestFunction = requestFunction;
const emptyCoin = (allCoin) => {
    for (let i = 0; i < allCoin.length; i++) {
        const coin = JSON.parse(fs_1.default.readFileSync(`./data/all_coins_info/${allCoin[i]}.json`, 'utf8'));
        if (coin.length === 0) {
            return allCoin[i];
        }
    }
    return '';
};
exports.emptyCoin = emptyCoin;
const getListingTime = (symbol) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=1&limit=1`);
    return data[0][0];
});
exports.getListingTime = getListingTime;
const getDayLive = (symbol) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=1&limit=1`);
    return Math.floor(Math.abs((data[0][0] - Date.now()) / 86400000));
});
exports.getDayLive = getDayLive;
const getFirstDay = (symbol, finallyArray) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=1d&startTime=1&limit=1`);
    const funding = (yield axios_1.default.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${data[0][0]}&endTime=${data[0][6]}&limit=300`)).data;
    if (funding.length !== 3) {
        funding.push({ symbol: '', fundingTime: 0, fundingRate: '0' });
    }
    if (funding.length !== 3) {
        funding.push({ symbol: '', fundingTime: 0, fundingRate: '0' });
    }
    if (funding.length !== 3) {
        funding.push({ symbol: '', fundingTime: 0, fundingRate: '0' });
    }
    const coinDay = (yield axios_1.default.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${data[0][0]}&endTime=${data[0][6]}&limit=288`)).data;
    finallyArray.push((0, createDayArray_1.createDayArray)(coinDay, funding));
    return data[0][6] + 1;
});
exports.getFirstDay = getFirstDay;
