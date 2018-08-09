// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`El valor introducido base : ${base} no es un numero`);
            return;
        }

        if( !Number(limite) ) {
            reject(`El valor introducido limite : ${limite} no es un numero`);
            return;
        }

        let data = '';

        data += '====================\n'.green
        data += `==== tabal de ${base} ====\n`.green
        data += '====================\n'.green

        for( let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);
    })
}

let crearArchivo = ( base, limite ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`El valor introducido ${base} No es un numero`);
            return;
        }

        if( !Number(limite) ) {
            reject(`El valor introducido limite : ${limite} no es un numero`);
            return;
        }

        let data = '';

        for( let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

