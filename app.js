
import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

// const myLogged = (req, res, next) => {
//     console.log('LOGGED');
//     next();
// }
// app.use(myLogged);


// Servir contenido estático
app.use( express.static('public'));


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


