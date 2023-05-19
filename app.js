const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');
const colors = require('colors');


console.clear();

//const base = 6;
// const [ , ,base = 0] = process.argv;
// console.log(base);
//console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado'))
    .catch(err => console.log(err));
