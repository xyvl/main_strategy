"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const allCoins_routes_1 = require("./routes/allCoins.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.get("/", async (req, res) => {
//   // let fileContent: Array<any> =JSON.parse(fs.readFileSync('file.txt', 'utf8'));
//   // const g = [55,77]
//   // fileContent.push(g)
//   // fs.writeFile('file.txt',JSON.stringify(fileContent), function(error){
//   //   if(error) throw error; // ошибка чтения файла, если есть
//   //   console.log('Данные успешно записаны записать файл');
//   // });
//   // res.json(fileContent);
//   interface IGetAllCoins {
//     symbol: string,
//     markPrice: string,
//     indexPrice: string,
//     estimatedSettlePrice: string,
//     lastFundingRate: string,
//     interestRate: string,
//     nextFundingTime: number,
//     time: number
//   }
//   const { data }: AxiosResponse<IGetAllCoins[]> = await axios.get(`${process.env.GET_ALL_COINS}`)
//   const allCoinArray: string[] = []
//   for (let i = 0; i < data.length; i++) {
//     allCoinArray.push(data[i].symbol)
//   }
//   res.json(allCoinArray)
// })
app.use('/api', allCoins_routes_1.allCoinsRouter);
app.listen(process.env.PORT, () => {
    console.log(`Сервер работает на порту: ${process.env.PORT}`);
});
