export interface IStrategyBlock {
	take: number,
	stop: number,
	profit: number,
	amountDeals: number
}
export interface IGetAllCoins {
	symbol: string,
	markPrice: string,
	indexPrice: string,
	estimatedSettlePrice: string,
	lastFundingRate: string,
	interestRate: string,
	nextFundingTime: number,
	time: number
}
export interface ICreateStrategyBody {
	openProcent: number,
	strategy: string,
	maxProcent: number,
	stopAndTakeDeal: number, 
	maxStopAndTakeDeal: number
}