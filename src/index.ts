import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import fs from 'fs'
import { createDataRouter } from "./routes/createData.routes"
import { dataChangeRouter } from "./routes/dataChange.routes"
import { strategyRouter } from "./routes/strategy.routes"
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
  let fileContent: Array<any> = JSON.parse(fs.readFileSync('./data/SUSHIUSDT.json', 'utf8'));
//   const g = [55,77]
//   fileContent.push(g)
// fs.writeFile('file.txt',JSON.stringify(fileContent), function(error){
//   if(error) throw error; // ошибка чтения файла, если есть
//   console.log('Данные успешно записаны записать файл');
// });
  res.json(fileContent);
})
app.use('/create', createDataRouter)
app.use('/change', dataChangeRouter)
app.use('/strategy', strategyRouter)
app.listen(process.env.PORT, () => {
  console.log(`Сервер работает на порту: ${process.env.PORT}`)
})

// 19 октября 2022 года начало = 1666137600000
// 15 августа 2022 года конец = 1692057600000
// 86 400 000 - один день
// 288 свечей один день