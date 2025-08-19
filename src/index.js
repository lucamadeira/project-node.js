import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexrouter from "./router/rout.js";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(join(__dirname, 'public')));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexrouter)


app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});