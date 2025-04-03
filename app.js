
import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import hbs from 'hbs';
import 'dotenv/config';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT;

// const myLogged = (req, res, next) => {
//     console.log('LOGGED');
//     next();
// }
// app.use(myLogged);

// HandleBars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// hbs
app.set('view engine', 'hbs');

// Servir contenido estático
app.use( express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'generic',
        titulo: 'generic'
    })
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'elements',
        titulo: 'elements'
    })
})

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


