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
exports.dataChangeController = void 0;
const fs_1 = __importDefault(require("fs"));
const dataChangeFunction_1 = require("../function/dataChangeFunction");
class dataChange {
    // Записать информацию для одной случайной монеты получая сразу 5 свеч
    getAndWriteInfoRandomCoinOneBarInOneStreams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const finallyArray = [];
            const symbol = (0, dataChangeFunction_1.emptyCoin)(JSON.parse(fs_1.default.readFileSync('./data/all_coins.json', 'utf8')));
            if (symbol === '') {
                res.json('Все монеты заполнены');
                return;
            }
            console.log(symbol);
            const dayLive = (yield (0, dataChangeFunction_1.getDayLive)(symbol)) + 1;
            const timeListing = yield (0, dataChangeFunction_1.getFirstDay)(symbol, finallyArray);
            let count = 0;
            for (let i = timeListing; i < Date.now() + 86400000 * 20; i += 86400000 * 15) {
                count++;
                console.log(`${count} / ${Math.ceil((Date.now() + 86400000 * 20 - timeListing) / (86400000 * 15))}`);
                yield (0, dataChangeFunction_1.requestFunction)(i, symbol, Date.now(), finallyArray);
            }
            fs_1.default.writeFileSync(`./data/all_coins_info/${symbol}.json`, JSON.stringify(finallyArray));
            res.json('finish');
        });
    }
}
exports.dataChangeController = new dataChange();
// 86 400 000 - один день
// 288 свечей один день
