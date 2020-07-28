import express from 'express';
import Routes from './routes'
//Initialization 
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
import './database';
//Middlewares

//Routes
app.use('/', Routes);
//Static files

//starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})