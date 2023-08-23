export interface IStrategyBlock{
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