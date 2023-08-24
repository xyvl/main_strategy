import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import fs from 'fs'
import { IStrategyBlock, IGetAllCoins } from "../type/TypeCreateData"
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
	// Создание файла для первой стратегии
	async createFileFirstStrategy(req: Request, res: Response) {
		const {strategy} = req.query
		const finallyArray: IStrategyBlock[][] = []
		const minProcent = 20
		const coefficent = 0.5
		for (let i = minProcent; i < 100; i++) {
			finallyArray[i] = []
			for (let j = 2; j < 20; j+= coefficent) {
				for (let k = 2; k < 20; k+= coefficent) {
					finallyArray[i].push({take: j, stop: k, amountDeals: 0, profit: 0})
				}
			}
		}
		fs.writeFileSync(`./data/strategy/strategy_${strategy}.json`, JSON.stringify(finallyArray))
		res.json('Ok')
	}
	// Создание файла монеты которым менее 600 дней
	async createFileForCoinsLessThan600DaysOld(req: Request, res: Response){
		const allCoin: string[] = JSON.parse(fs.readFileSync(`./data/all_coins.json`, 'utf8'))
		const finallyArray: string[] = []
		for (let i = 0; i < allCoin.length; i++) {
			const array: TypeArrayCandle[] = (await axios.get(`${process.env.GET_DAY_COIN}symbol=${allCoin[i]}&interval=5m&startTime=${1640217600000}&limit=1`)).data
			if(array[0][0] !== 1640217600000){
				finallyArray.push(allCoin[i])
			}	
		}
		fs.writeFileSync(`./data/coin_live.json`, JSON.stringify(finallyArray))
		res.json('finish')
	}
}
export const createDataController = new allCoins()