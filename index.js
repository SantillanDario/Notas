const express = require('express');
const morgan = require('morgan');

const app = express();

//////////////////////////////////
// MIDDLEWARES
//////////////////////////////////

const logger = (req, res, next) => {
    console.log("Nueva peticion Http")
    next();
}

//////////////////////////////////
// PUG CONFIG
//////////////////////////////////

app.set('view engine', 'pug'); //seteamos pug como el motor de vistas por defecto
app.set('views', 'views'); //seteamos la carpeta views como el lugar defecto  donde van a estar los archivos html

app.use(express.urlencoded());
app.use(express.static('public'));
app.use(morgan('tiny'))
app.use(logger);

//////////////////////////////////
// ROUTAS
//////////////////////////////////

app.get('/', (req, res) => {
    const {name, age} = req.query;
    const notas = ['Nota 1', 'Nota 2', 'Nota 3'];
    res.render('index', {notas});
});

app.get('/notes/new', (req, res) => {
    res.render('new')
});

app.post('/notes', (req, res) => {
    console.log(`El titulo de la nota es ${req.body.title}`);
    res.redirect('/');
});

app.post('/users', (req, res) => {
    res.status(404)
    .set('Notas-version', '1.0')
    .send('No se encontro el recurso');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salio mal');
});

app.listen(3001, () => console.log('Listening on port 3001'));