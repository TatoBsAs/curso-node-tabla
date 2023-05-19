const argv = require('yargs')
.option('b' /*nombre corto parametro*/,{
    alias: 'base', //Al ejecutar en consola se puede usar el alias o el nombre corto
    type: 'number',
    demandOption: true //si no es obligatorio el parametro entonces no poner esta propiedad directamente
    }							
)
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: true
    }							
)
.option('h',{
    alias: 'hasta',
    type: 'number',
    demandOption: true
    }							
)
.check( (argv, option) => { //Funcion de flecha para chequear cosas
    if(isNaN(argv.b)){ //si no es numero el arguemento base
        throw 'El parametro b no es numerico';
    }
    return true	//el check debe devolver ok para que se continue procesando
}
)
.argv; //Propiedad a la cual realmente queremos acceder


module.exports = argv;