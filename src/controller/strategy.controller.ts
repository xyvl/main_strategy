import { Request, Response } from "express"
import { IStrategyBlock } from "../type/TypeCreateData"
import fs from 'fs'
import { IArrayDay } from "../type/TypeDataChange"
import { fundingFunction, getPositionInformation } from "../function/strategy"

class strategy {
	async shortStrategy(req: Request, res: Response) {
		res.json('Ok')
	}
	async longStrategy(req: Request, res: Response) {
		res.json('long')
	}
	async listingStrategy(req: Request, res: Response) {
		const strategy: IStrategyBlock[][] = JSON.parse(fs.readFileSync('./data/strategy_listing/strategy_file.json', 'utf8'))
		const allCoins: string[] = JSON.parse(fs.readFileSync('./data/strategy_listing/coins_remained.json', 'utf8'))
		let plus = 0
		let minus = 0
		//проходимся по всем монетам
		for (let i = 0; i < allCoins.length; i++) {
			const coin: IArrayDay[] = JSON.parse(fs.readFileSync(`./data/all_coins_info/${allCoins[i]}.json`, 'utf8'))
			console.log(allCoins[i])
			//проходимся по стратегии по открытию
			for (let j = 0; j < strategy.length; j++) {
				// проходимся по открытию внутри стратегии
				for (let t = 0; t < strategy[j].length; t++) {
					const [priceOpenDeal, stopLoss, takeProfit] = getPositionInformation(
						j,
						strategy[j][t].stop,
						strategy[j][t].take,
						coin[0]
					)
					let dealOpen = false
					day: for (let y = 0; y < coin.length; y++) {
						if (coin[y].max > priceOpenDeal) {
							dealOpen = true
						}
						if (dealOpen === false) {
							continue
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
								minus++
								strategy[j][t].profit = strategy[j][t].profit - strategy[j][t].stop
								strategy[j][t].amountDeals++
								break day
							}
							if (coin[y].array[u].min > takeProfit) {
								plus++
								strategy[j][t].profit = strategy[j][t].profit + strategy[j][t].take
								strategy[j][t].amountDeals++
								break day
							}
						}
					}
				}
			}
		}
		for (let i = 0; i < strategy.length; i++) {
			for (let j = 0; j < strategy[i].length; j++) {
				if (strategy[i][j].profit > 2000) {
					console.log(`Open procent: ${i}, Stop: ${strategy[i][j].stop}, Take: ${strategy[i][j].take}, Profit: ${strategy[i][j].profit}, Сделок: ${strategy[i][j].amountDeals}`)
				}
			}

		}
		console.log(`Плюсовые: ${plus}. Минусовые: ${minus}`)
		res.json('finish')
	}
	async checkingTheStrategy(req: Request, res: Response) {
		res.json('finish')
	}
}
export const strategyController = new strategy()
// 95 191 287