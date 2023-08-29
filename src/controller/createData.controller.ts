import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import fs from 'fs'
import { IStrategyBlock, IGetAllCoins, ICreateStrategyBody } from "../type/TypeCreateData"
import { TypeArrayCandle } from "../type/TypeDataChange"

class allCoins {
	// Создание файла где находятся все монеты
	async createFileForAllCoins(req: Request, res: Response) {
		const { data }: AxiosResponse<IGetAllCoins[]> = await axios.get(`${process.env.GET_ALL_COINS}`)
		let allCoinArray: string[] = []
		for (let i = 0; i < data.length; i++) {
			allCoinArray.push(data[i].symbol)
		}
		allCoinArray = allCoinArray.filter((el: string) => el.endsWith("USDT") && el)
		fs.writeFile('./data/all_coins.json', JSON.stringify(allCoinArray), function (error) {
			if (error) throw error // ошибка чтения файла, если есть
			console.log('Данные успешно записаны')
		})
		res.json(allCoinArray)
	}
	// Создание файла для каждой монеты
	async createFileForEachCoin(req: Request, res: Response) {
		const allCoinsArray = JSON.parse(fs.readFileSync('./data/all_coins.json', 'utf8'))
		const newArray: any[] = []
		for (let i = 0; i < allCoinsArray.length; i++) {
			fs.writeFile(`./data/all_coins_info/${allCoinsArray[i]}.json`, JSON.stringify(newArray), (err) => {
				if (err) throw err
				console.log(`File created: ${allCoinsArray[i]}.json`)
			})
		}
		res.json(allCoinsArray)
	}
	// Создание файла для стратегии
	async createFileStrategy(req: Request<any, any, ICreateStrategyBody>, res: Response) {
		const {strategy, openProcent, maxProcent, stopAndTakeDeal, maxStopAndTakeDeal} = req.body
		const finallyArray: IStrategyBlock[][] = []
		const coefficent = 0.5
		for (let i = openProcent; i < maxProcent; i++) {
			finallyArray[i] = []
			for (let j = stopAndTakeDeal; j <= maxStopAndTakeDeal; j+= coefficent) {
				for (let k = stopAndTakeDeal; k <= maxStopAndTakeDeal; k+= coefficent) {
					finallyArray[i].push({take: j, stop: k, amountDeals: 0, profit: 0})
				}
			}
		}
		fs.writeFileSync(`./data/strategy_${strategy}/strategy_file.json`, JSON.stringify(finallyArray))
		fs.writeFileSync(`./data/strategy_${strategy}/coins_remained.json`, fs.readFileSync('./data/all_coins.json', 'utf8'))
		res.json('finish')
	}
}
export const createDataController = new allCoins()