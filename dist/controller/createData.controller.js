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
exports.createDataController = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
class allCoins {
    // Создание файла где находятся все монеты
    createFileForAllCoins(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(`${process.env.GET_ALL_COINS}`);
            let allCoinArray = [];
            for (let i = 0; i < data.length; i++) {
                allCoinArray.push(data[i].symbol);
            }
            allCoinArray = allCoinArray.filter((el) => el.endsWith("USDT") && el);
            fs_1.default.writeFile('./data/all_coins.json', JSON.stringify(allCoinArray), function (error) {
                if (error)
                    throw error; // ошибка чтения файла, если есть
                console.log('Данные успешно записаны');
            });
            res.json(allCoinArray);
        });
    }
    // Создание файла для каждой монеты
    createFileForEachCoin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allCoinsArray = JSON.parse(fs_1.default.readFileSync('./data/all_coins.json', 'utf8'));
            const newArray = [];
            for (let i = 0; i < allCoinsArray.length; i++) {
                fs_1.default.writeFile(`./data/all_coins_info/${allCoinsArray[i]}.json`, JSON.stringify(newArray), (err) => {
                    if (err)
                        throw err;
                    console.log(`File created: ${allCoinsArray[i]}.json`);
                });
            }
            res.json(allCoinsArray);
        });
    }
    // Создание файла для стратегии
    createFileStrategy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { strategy, openProcent, maxProcent, stopAndTakeDeal, maxStopAndTakeDeal } = req.body;
            const finallyArray = [];
            const coefficent = 0.5;
            for (let i = openProcent; i < maxProcent; i++) {
                finallyArray[i] = [];
                for (let j = stopAndTakeDeal; j <= maxStopAndTakeDeal; j += coefficent) {
                    for (let k = stopAndTakeDeal; k <= maxStopAndTakeDeal; k += coefficent) {
                        finallyArray[i].push({ take: j, stop: k, amountDeals: 0, profit: 0 });
                    }
                }
            }
            fs_1.default.writeFileSync(`./data/strategy_${strategy}/strategy_file.json`, JSON.stringify(finallyArray));
            fs_1.default.writeFileSync(`./data/strategy_${strategy}/coins_remained.json`, fs_1.default.readFileSync('./data/all_coins.json', 'utf8'));
            res.json('finish');
        });
    }
}
exports.createDataController = new allCoins();
