import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import fs from 'fs'

interface IGetAllCoins {
	symbol: string,
	markPrice: string,
	indexPrice: string,
	estimatedSettlePrice: string,
	lastFundingRate: string,
	interestRate: string,
	nextFundingTime: number,
	time: number
}

class allCoins {
	async getAllCoins(req: Request, res: Response) {
		const { data }: AxiosResponse<IGetAllCoins[]> = await axios.get(`${process.env.GET_ALL_COINS}`)
		let allCoinArray: string[] = []
		for (let i = 0; i < data.length; i++) {
			allCoinArray.push(data[i].symbol)
		}
		allCoinArray = allCoinArray.filter((el: string) => el.endsWith("USDT") && el)
		fs.writeFile('./data/all_coins.json',JSON.stringify(allCoinArray), function(error){
			if(error) throw error; // ошибка чтения файла, если есть
			console.log('Данные успешно записаны записать файл');
		});
		res.json(allCoinArray)
	}
}
export const allCoinsController = new allCoins()