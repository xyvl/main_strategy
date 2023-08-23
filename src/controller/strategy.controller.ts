import { Request, Response } from "express"
import { IStrategyBlock } from "../type/TypeCreateData"
import fs from 'fs'
import { IArrayDay } from "../type/TypeDataChange"
import { getPositionInformation } from "../function/strategy"
class strategy {
	async shortStrategy(req: Request, res: Response) {
		const strategy: IStrategyBlock[][] = JSON.parse(fs.readFileSync('./data/strategy/strategy_short.json', 'utf8'))
		const allCoin = JSON.parse(fs.readFileSync('./data/all_coins.json', 'utf8'))

		// Получаем все монеты по очереди
		for (let i = 0; i < allCoin.length; i++) {
			const coin: IArrayDay[] = JSON.parse(fs.readFileSync(`./data/all_coins_info/${allCoin[i]}.json`, 'utf8'))
			//Проходимся по монетам
			for (let j = 0; j < coin.length; j++) {
				//Берём лишь монеты которые поднялись больше
				if (coin[j].maxChange > 40) {
					// проходимся до максимума монеты 
					for (let y = 40; y < coin[j].maxChange && y < strategy.length; y++) {
						// собираем инфу
						for (let t = 0; t < strategy[y].length; t++) {
							const [priceOpenDeal, stopLoss, takeProfit] = getPositionInformation(
								y,
								strategy[y][t].stop,
								strategy[y][t].take,
								coin[j]
							)
							let dealOpen: boolean = false
							dayCycle: for (let p = 0; j + p < coin.length; p++) {
								for (let u = 0; u < coin[j + p].array.length; u++) {
									// если максимум свечки больше цены входа, то сделка открыта
									if (coin[i + p].array[u].max > priceOpenDeal) {
										console.log(coin[i + p].array[u].max)
										dealOpen = true
										if (coin[i + p].array[u].max > stopLoss) {
											strategy[y][t].amountDeals++
											strategy[y][t].profit =
												-strategy[y][t].stop -
												0.1 +
												strategy[y][t].profit
											break dayCycle
										}
										continue
									}

								}
							}
						}

					}

				}

			}

		}

		res.json('Ok')
	}
	async longStrategy(req: Request, res: Response) {
		res.json('long')
	}
	async checkingTheStrategy(req: Request, res: Response){
		const coin: IArrayDay[] = JSON.parse(fs.readFileSync(`./data/SUSHIUSDT.json`, 'utf8'))
		for (let i = 0; i < coin.length; i++) {
			if(coin[i].change > 20){
				console.log(coin[i].change, i)
			}
			
		}
		res.json('finish')
	}
}
export const strategyController = new strategy()