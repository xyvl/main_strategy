import axios, { AxiosResponse } from "axios"
import { IArrayDay, IFunding, TypeArrayCandle } from "../type/TypeDataChange"
import { createDayArray } from "./createDayArray"
import fs from 'fs'

export const requestFunction = async (time: number, symbol: string, timeIsNow: number, finallyArray: IArrayDay[]) => {
	const request1 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 0)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request2 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 1)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request3 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 2)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request4 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 3)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request5 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 4)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request6 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 5)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request7 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 6)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request8 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 7)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request9 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 8)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request10 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 9)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request11 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 10)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request12 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 11)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request13 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 12)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request14 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 13)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	const request15 = new Promise(async (res, rej) => {
		const localTime = (time + 86_400_000 * 14)
		if (timeIsNow - localTime > 86_400_000) {
			const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${localTime}&limit=288`)
			const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${localTime}&limit=3`)).data
			res(createDayArray(data, funding))
		} else {
			res(null)
		}
	})
	await Promise.all([request1, request2, request3, request4, request5, request6, request7, request8, request9, request10, request11, request12, request13, request14, request15]).then((data: any[]) => {
		for (let i = 0; i < data.length; i++) {
			if (data[i] === null) {
				continue
			}
			finallyArray.push(data[i])
		}
	})
}
export const emptyCoin = (allCoin: string[]): string => {
	for (let i = 0; i < allCoin.length; i++) {
		const coin = JSON.parse(fs.readFileSync(`./data/all_coins_info/${allCoin[i]}.json`, 'utf8'))
		if (coin.length === 0) {
			return allCoin[i]
		}
	}
	return ''
}
export const getListingTime = async (symbol: string): Promise<number> => {
	const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=1&limit=1`)
	return data[0][0]
}
export const getDayLive = async (symbol: string): Promise<number> => {
	const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=1&limit=1`)

	return Math.floor(Math.abs((data[0][0] - Date.now()) / 86_400_000))
}
export const getFirstDay = async (symbol: string, finallyArray: IArrayDay[]) => {
	const { data }: AxiosResponse<TypeArrayCandle[]> = await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=1d&startTime=1&limit=1`)
	const funding: IFunding[] = (await axios.get(`${process.env.GET_FUNDING}symbol=${symbol}&startTime=${data[0][0]}&endTime=${data[0][6]}&limit=300`)).data
	if(funding.length !== 3){
		funding.push({symbol: '', fundingTime: 0, fundingRate: '0'})
	}
	if(funding.length !== 3){
		funding.push({symbol: '', fundingTime: 0, fundingRate: '0'})
	}
	if(funding.length !== 3){
		funding.push({symbol: '', fundingTime: 0, fundingRate: '0'})
	}
	const coinDay = (await axios.get(`${process.env.GET_DAY_COIN}symbol=${symbol}&interval=5m&startTime=${data[0][0]}&endTime=${data[0][6]}&limit=288`)).data

  finallyArray.push(createDayArray(coinDay, funding))

	return data[0][6] + 1
}