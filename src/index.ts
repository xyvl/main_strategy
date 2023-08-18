import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import axios, { AxiosResponse } from 'axios'
import fs from 'fs'
import { allCoinsRouter } from "./routes/allCoins.routes"
dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
app.get("/", async (req, res) => {
  let fileContent: Array<any> =JSON.parse(fs.readFileSync('./data/all_coins.json', 'utf8'));
//   const g = [55,77]
//   fileContent.push(g)
// fs.writeFile('file.txt',JSON.stringify(fileContent), function(error){
//   if(error) throw error; // ошибка чтения файла, если есть
//   console.log('Данные успешно записаны записать файл');
// });
  res.json(fileContent);
})
app.use('/api', allCoinsRouter)
app.listen(process.env.PORT, () => {
  console.log(`Сервер работает на порту: ${process.env.PORT}`)
})