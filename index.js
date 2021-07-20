const express = require('express');
const morgan = require('morgan');

const app = express();

//////////////////////////////////
// PUG CONFIG
//////////////////////////////////
app.set('view engine', 'pug'); //seteamos pug como el motor de vistas por defecto
app.set('views', 'views'); //seteamos la carpeta views como el lugar defecto  donde van a estar los archivos html

app.use(express.static('public'));
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    const {name, age} = req.query;
    const notas = ['Nota 1', 'Nota 2', 'Nota 3'];
    res.render('index', {notas});
});

app.post('/users', (req, res) => {
    res.status(404)
    .set('Notas-version', '1.0')
    .send('No se encontro el recurso');
});

app.listen(3001, () => console.log('Listening on port 3001'));