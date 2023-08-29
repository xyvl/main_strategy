import { Request, Response } from 'express'
import fs from 'fs'
import { IArrayDay } from "../type/TypeDataChange"
import { emptyCoin, getDayLive, requestFunction, getListingTime, getFirstDay } from "../function/dataChangeFunction"

class dataChange {
	// Записать информацию для одной случайной монеты получая сразу 5 свеч
	async getAndWriteInfoRandomCoinOneBarInOneStreams(req: Request, res: Response) {
		const finallyArray: IArrayDay[] = []
		const symbol = emptyCoin(JSON.parse(fs.readFileSync('./data/all_coins.json', 'utf8')))
		if (symbol === '') {
			res.json('Все монеты заполнены')
			return
		}
		console.log(symbol)
		const dayLive = await getDayLive(symbol) + 1
		const timeListing = await getFirstDay(symbol,finallyArray)
		let count = 0
		for (let i = timeListing; i < Date.now() + 86_400_000 * 20; i += 86_400_000 * 15) {
			count++
			console.log(`${count} / ${Math.ceil((Date.now() + 86_400_000 * 20 - timeListing) / (86_400_000 * 15))}`)
			await requestFunction(i, symbol, Date.now(), finallyArray)
		}
		fs.writeFileSync(`./data/all_coins_info/${symbol}.json`, JSON.stringify(finallyArray))
		res.json('finish')
	}
}
export const dataChangeController = new dataChange()
// 86 400 000 - один день
// 288 свечей один день