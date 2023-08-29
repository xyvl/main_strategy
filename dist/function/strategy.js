"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fundingFunction = exports.getPositionInformation = void 0;
const coefficient = 0.5;
const getPositionInformation = (entryPrice, stopLoss, takeProfit, array) => {
    //Цена входа // Стоп лосс //Тейк профит
    const entrance = (entryPrice / coefficient) * array.halfPercent + array.open;
    return [
        entrance,
        entrance + (stopLoss / coefficient) * array.halfPercent,
        entrance - (takeProfit / coefficient) * array.halfPercent,
    ];
};
exports.getPositionInformation = getPositionInformation;
const fundingFunction = (value, strategy) => {
    if (strategy === "long") {
        if (value > 0) {
            return Math.abs(value) * -1;
        }
        else {
            return Math.abs(value);
        }
    }
    if (strategy === "short") {
        if (value < 0) {
            return Math.abs(value) * -1;
        }
        else {
            return Math.abs(value);
        }
    }
    return 0;
};
exports.fundingFunction = fundingFunction;
