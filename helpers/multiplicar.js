const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar = false, hasta) => {
    try{

        console.log(listar);

    
        let salidaArchivo = '', salidaPantalla = '';
    
        for (let i = 1; i <= hasta; i++) {
            //console.log(`${base} x ${i} = ${5 * i}`);
            salidaArchivo +=`${base} x ${i} = ${base * i}\n`;
            salidaPantalla +=`${base} ${'x'.bgRed.blue} ${i} = ${base * i}\n`;
        }			
    
        if (listar){
            console.log('=================='.green);
            console.log('Tabla del: '.random, colors.blue(base) );
            console.log('=================='.green);    
            console.log(salidaPantalla);
        }
    
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salidaArchivo);
    
        return `Tabla-${base}.txt`;
        
    } catch(error){
        throw error;
    }
} 

module.exports = {
    crearArchivo // o pueder ser crearArchivoExp: crearArchivo, pero como uso mismo nombre no hace falta poner nommbre:valor
}