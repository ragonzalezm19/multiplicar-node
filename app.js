const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then( data => console.log(data) )
            .catch( e => console.log( e ) )
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ colors.green(archivo) }` ))
            .catch(e => console.log( e ))
        break;

    default:
        console.log('Comando no reconocido')
        break;
}

