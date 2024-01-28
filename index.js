import express from 'express';
import {PORT, mongoDBURL} from "./config.js"
import cors from 'cors'
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json())


app.use(cors());

/*app.use(cors({
    origin: 'http://localhost:3000' ,
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'] ,
    allowedHeaderss: ['Content-Type']
})
)

*/


app.get('/' , (request , response) => {
    console.log(request)
    return response.status(234).send('Mern Turtorial')
})

app.use('/books', booksRoute);


mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("connected to database");
    app.listen(PORT , ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
})