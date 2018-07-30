const argv = require('./config/yargs').argv;
const colors = require('colors');

const {
    crear,
    getListado,
    actualizar,
    borrar
} = require('./controllers/tarea.controller');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);

        console.log(tarea);
        break;
    
    case 'listar':

        let listado = getListado();

        for (let tarea of listado){
            console.log('=========== TAREAS ===========\n'.green);
            console.log(`   Tarea:  ${tarea.descripcion}     `.yellow);
            console.log(`   Estado: ${tarea.completado}\n     `.yellow);
        }
        break;

    case 'actualizar':
        
        let act = actualizar(argv.descripcion, argv.completado);
        console.log(act);
        break;

    case 'borrar':

        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no valido');
        break;
}