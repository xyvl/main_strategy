"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const createData_routes_1 = require("./routes/createData.routes");
const dataChange_routes_1 = require("./routes/dataChange.routes");
const strategy_routes_1 = require("./routes/strategy.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let fileContent = JSON.parse(fs_1.default.readFileSync('./data/SUSHIUSDT.json', 'utf8'));
    //   const g = [55,77]
    //   fileContent.push(g)
    // fs.writeFile('file.txt',JSON.stringify(fileContent), function(error){
    //   if(error) throw error; // ошибка чтения файла, если есть
    //   console.log('Данные успешно записаны записать файл');
    // });
    res.json(fileContent);
}));
app.use('/create', createData_routes_1.createDataRouter);
app.use('/change', dataChange_routes_1.dataChangeRouter);
app.use('/strategy', strategy_routes_1.strategyRouter);
app.listen(process.env.PORT, () => {
    console.log(`Сервер работает на порту: ${process.env.PORT}`);
});
// 19 октября 2022 года начало = 1666137600000
// 15 августа 2022 года конец = 1692057600000
// 86 400 000 - один день
// 288 свечей один день
