import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import fs from 'fs'
import { createDayArray } from "../function/createDayArray"
import { IArrayDay, IFunding, TypeArrayCandle } from "../type/TypeDataChange"

class dataChange {
	// Записать информацию для одной случайной монеты получая сразу 5 свеч
	async getAndWriteInfoRandomCoinFiveBar(req: Request, res: Response) {
		const allCoin: string[] = JSON.parse(fs.readFileSync('./data/all_coins.json', 'utf8'))
		let symbol
		let count = 0
		const finallyArray: IArrayDay[] = []
		for (let i = 0; i < allCoin.length; i++) {
			const coin = JSON.parse(fs.readFileSync(`./data/all_coins_info/${allCoin[i]}.json`, 'utf8'))
			if (coin.length === 0) {
				console.log(allCoin[i])
				symbol = allCoin[i]
				break
			}
		}
		for (let i = 1640217600000; i < 1692057600000; i += 86_400_000 * 5) {
			let { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${i}&limit=1440`)
			let funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${i}&limit=3`)).data
			if (data.length === 0) {
				count++
				console.log(`Сделки не было${count}/120`)
				continue
			}
			const templateArray: TypeArrayCandle[][] = [[], [], [], [], []]
			for (let i = 0; i < data.length; i++) {
				const index = Math.floor(i / 288)
				templateArray[index].push(data[i])
			}
			for (let i = 0; i < templateArray.length; i++) {
				finallyArray.push(createDayArray(templateArray[i], funding))
			}
			count++
			console.log(`${count}/120`)
		}
		fs.writeFileSync(`./data/all_coins_info/${symbol}.json`, JSON.stringify(finallyArray))
		res.json(symbol)
	}
	// Записать информацию для одной случайной монеты получая сразу 5 свеч
	async getAndWriteInfoRandomCoinFiveBarInThreeStreams(req: Request, res: Response) {
		const allCoin: string[] = JSON.parse(fs.readFileSync('./data/all_coins.json', 'utf8'))
		let symbol: string = ''
		let count = 0
		const finallyArray: IArrayDay[] = []
		for (let i = 0; i < allCoin.length; i++) {
			const coin = JSON.parse(fs.readFileSync(`./data/all_coins_info/${allCoin[i]}.json`, 'utf8'))
			if (coin.length === 0) {
				console.log(allCoin[i])
				symbol = allCoin[i]
				break
			}
		}
		const requestFunction = async (one: number, two: number, three: number) => {
			const request1 = new Promise(async (res, rej) => {
				const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${one}&limit=1440`)
				const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${one}&limit=3`)).data
				const templateArray: TypeArrayCandle[][] = [[], [], [], [], []]
				for (let i = 0; i < data.length; i++) {
					const index = Math.floor(i / 288)
					templateArray[index].push(data[i])
				}
				const finallyArrayPromise: IArrayDay[] = []
				for (let i = 0; i < templateArray.length; i++) {
					finallyArrayPromise.push(createDayArray(templateArray[i], funding))
				}
				res(finallyArrayPromise)
			})
			const request2 = new Promise(async (res, rej) => {
				const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${two}&limit=1440`)
				const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${two}&limit=3`)).data
				const templateArray: TypeArrayCandle[][] = [[], [], [], [], []]
				for (let i = 0; i < data.length; i++) {
					const index = Math.floor(i / 288)
					templateArray[index].push(data[i])
				}
				const finallyArrayPromise: IArrayDay[] = []
				for (let i = 0; i < templateArray.length; i++) {
					finallyArrayPromise.push(createDayArray(templateArray[i], funding))
				}
				res(finallyArrayPromise)
			})
			const request3 = new Promise(async (res, rej) => {
				const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${three}&limit=1440`)
				const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${three}&limit=3`)).data
				const templateArray: TypeArrayCandle[][] = [[], [], [], [], []]
				for (let i = 0; i < data.length; i++) {
					const index = Math.floor(i / 288)
					templateArray[index].push(data[i])
				}
				const finallyArrayPromise: IArrayDay[] = []
				for (let i = 0; i < templateArray.length; i++) {
					finallyArrayPromise.push(createDayArray(templateArray[i], funding))
				}
				res(finallyArrayPromise)
			})
			await Promise.all([request1, request2, request3]).then((data: any[]) => {
				for (let i = 0; i < data.length; i++) {
					for (let j = 0; j < data[i].length; j++) {
						finallyArray.push(data[i][j])
					}	
				}
			})
		}
		for (let i = 1640217600000; i < 1692057600000; i += 86_400_000 * 15) {
			await requestFunction(i, i + 86_400_000 * 5, i + 86_400_000 * 10)
			count++
			console.log(`${count}/40`)
		}
		fs.writeFileSync(`./data/all_coins_info/${symbol}.json`, JSON.stringify(finallyArray))
		res.json(process.env.GET_DAY_COIN)
	}
}
export const dataChangeController = new dataChange()
// 23 декабря 2021 года начало = 1640217600000
// 15 августа 2023 года конец = 1692057600000 51840000000
// 86 400 000 - один день
// 288 свечей один день