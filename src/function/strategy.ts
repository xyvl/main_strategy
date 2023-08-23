import { IArrayDay } from "../type/TypeDataChange"

const coefficient = 0.5
export const getPositionInformation = (entryPrice: number, stopLoss: number, takeProfit: number, array: IArrayDay) => {
	//Цена входа // Стоп лосс //Тейк профит
	const entrance = (entryPrice / coefficient) * array.halfPercent + array.open
	return [
		entrance,
		entrance + (stopLoss / coefficient) * array.halfPercent,
		entrance - (takeProfit / coefficient) * array.halfPercent,
	]
}