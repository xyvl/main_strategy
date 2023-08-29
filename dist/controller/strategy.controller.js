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
exports.strategyController = void 0;
const fs_1 = __importDefault(require("fs"));
const strategy_1 = require("../function/strategy");
class strategy {
    shortStrategy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('Ok');
        });
    }
    longStrategy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('long');
        });
    }
    listingStrategy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const strategy = JSON.parse(fs_1.default.readFileSync('./data/strategy_listing/strategy_file.json', 'utf8'));
            const allCoins = JSON.parse(fs_1.default.readFileSync('./data/strategy_listing/coins_remained.json', 'utf8'));
            let plus = 0;
            let minus = 0;
            //проходимся по всем монетам
            for (let i = 0; i < allCoins.length; i++) {
                const coin = JSON.parse(fs_1.default.readFileSync(`./data/all_coins_info/${allCoins[i]}.json`, 'utf8'));
                console.log(allCoins[i]);
                //проходимся по стратегии по открытию
                for (let j = 0; j < strategy.length; j++) {
                    // проходимся по открытию внутри стратегии
                    for (let t = 0; t < strategy[j].length; t++) {
                        const [priceOpenDeal, stopLoss, takeProfit] = (0, strategy_1.getPositionInformation)(j, strategy[j][t].stop, strategy[j][t].take, coin[0]);
                        let dealOpen = false;
                        day: for (let y = 0; y < coin.length; y++) {
                            if (coin[y].max > priceOpenDeal) {
                                dealOpen = true;
                            }
                            if (dealOpen === false) {
                                continue;
                            }
                            for (let u = 0; u < coin[y].array.length; u++) {
                                // if(u === coin[y].array.length - 192){
                                // 	strategy[j][t].profit = strategy[j][t].profit + fundingFunction(coin[u].funding1, "short") 
                                // }
                                // if(u === coin[y].array.length - 97){
                                // 	strategy[j][t].profit = strategy[j][t].profit + fundingFunction(coin[u].funding2, "short") 
                                // }
                                // if(u === coin[y].array.length - 1){
                                // 	strategy[j][t].profit = strategy[j][t].profit + fundingFunction(coin[u].funding3, "short") 
                                // }
                                if (coin[y].array[u].max < stopLoss) {
                                    minus++;
                                    strategy[j][t].profit = strategy[j][t].profit - strategy[j][t].stop;
                                    strategy[j][t].amountDeals++;
                                    break day;
                                }
                                if (coin[y].array[u].min > takeProfit) {
                                    plus++;
                                    strategy[j][t].profit = strategy[j][t].profit + strategy[j][t].take;
                                    strategy[j][t].amountDeals++;
                                    break day;
                                }
                            }
                        }
                    }
                }
            }
            for (let i = 0; i < strategy.length; i++) {
                for (let j = 0; j < strategy[i].length; j++) {
                    if (strategy[i][j].profit > 2000) {
                        console.log(`Open procent: ${i}, Stop: ${strategy[i][j].stop}, Take: ${strategy[i][j].take}, Profit: ${strategy[i][j].profit}, Сделок: ${strategy[i][j].amountDeals}`);
                    }
                }
            }
            console.log(`Плюсовые: ${plus}. Минусовые: ${minus}`);
            res.json('finish');
        });
    }
    checkingTheStrategy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('finish');
        });
    }
}
exports.strategyController = new strategy();
// 95 191 287
