"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Initialization 
const app = express_1.default();
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
//Routes
app.get('/', (req, res) => res.send('El servidor está funcionando'));
//Static files
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
