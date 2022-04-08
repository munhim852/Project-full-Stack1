import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();
<<<<<<< HEAD
dotenv.config({ path: 'a.env' });
=======




>>>>>>> parent of 89927ff (make it better)
app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());


<<<<<<< HEAD
app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb+srv://admin:admin8964@cluster0.jompk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
=======
const CONNECTION_URL = "mongodb+srv://admin:admin8964@cluster0.jompk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
>>>>>>> parent of 89927ff (make it better)
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

