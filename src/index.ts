import express from 'express';

//Initialization 
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares

//Routes
app.get('/', (req, res) => res.send('El servidor está funcionando'));
//Static files

//starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})