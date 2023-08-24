import { IArrayDay, IFunding, IMyArrayCandle, TypeArrayCandle } from "../type/TypeDataChange"

export const createDayArray = (data: TypeArrayCandle[], fundingArray: IFunding[]): IArrayDay => {
	console.log(data.length)
	let open = parseFloat(data[0][1])
	let close = parseFloat(data[data.length - 1][4])
	let arrayMax: number[] = []
	let arrayMin: number[] = []

	for (let i = 0; i < data.length; i++) {
		arrayMax.push(parseFloat(data[i][2]))
		arrayMin.push(parseFloat(data[i][3]))
	}
	let max = Math.max(...arrayMax)
	let min = Math.min(...arrayMin)
	return {
		array: arrayBinanceInObject(data),
		open, 
		close,
		max,
		min,
		change: ((close - open) / (open / 100)),
		maxChange: ((max - open) / (open / 100)),
		minChange: ((min - open) / (open / 100)),
		halfPercent: open / 200,
		oneProcent: open / 100,
		funding1: parseFloat(fundingArray[0].fundingRate),
		funding2: parseFloat(fundingArray[1].fundingRate),
		funding3: parseFloat(fundingArray[2].fundingRate)
	}
}
const arrayBinanceInObject = (data: TypeArrayCandle[]): IMyArrayCandle[] => {
	const finallyArray: IMyArrayCandle[] = []
	for (let i = 0; i < data.length; i++) {
		finallyArray.push({
			max: parseFloat(data[i][2]),
			min: parseFloat(data[i][3]),
		})
	}
	return finallyArray;
}