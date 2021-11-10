import app from "./src/app.js";
import {config} from "./src/constants/index.js";
import mongoose from "mongoose";

const PORT = config.port || 8080;

app.listen(PORT, () => console.log('servidor inicializado'));


mongoose.connect('mongodb://localhost:27017/crud-mongo')
    .then(db => console.log(`Base de datos connectada`))
    .catch(err => console.log(err));

