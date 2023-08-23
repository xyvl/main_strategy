export type TypeArrayCandle = [number, string, string, string, string, string, number, string, number, string, string, string]
export interface IArrayDay {
	array: IMyArrayCandle[]
	max: number
	min: number
	open: number
	close: number
	halfPercent: number,
	oneProcent: number
	minChange: number
	maxChange: number
	change: number
	funding1: number
	funding2: number
	funding3: number
}
export interface IFunding {
	symbol: string,
	fundingTime: number,
	fundingRate: string
}
export interface IMyArrayCandle {
	max: number,
	min: number
}