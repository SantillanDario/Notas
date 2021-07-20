const express = require('express');
const cookieSession = require('cookie-session');
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

app.use(express.urlencoded({extended: true}));
app.use(cookieSession({
    secret: 'una_cadena_secreta',
    maxAge: 24 * 60 * 60 * 1000
}));
app.use('/static', express.static('public'));
app.use(morgan('dev'))

//////////////////////////////////
// ROUTAS
//////////////////////////////////

//MUESTRA LA LISTA DE NOTA
app.get('/', (req, res) => {
    const notes = req.session.notes || [];
    res.render('index', { notes });
});

//MUESTRA EL FORMULARIO PARA CREAR NOTAS
app.get('/notes/new', (req, res) => {
    res.render('new');
});

//PERMITE CREAR NOTAS
app.post('/notes', (req, res) => {
    req.session.id = (req.session.id || 0) + 1;
    const id = req.session.id;

    req.session.notes = req.session.notes || [];
    req.session.notes.push({ id: id, title: req.body.title, body: req.body.body})
    res.redirect('/');
});

app.listen(3001, () => console.log('Listening on port 3001'));