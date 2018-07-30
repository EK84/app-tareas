const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como compleatado o pendiente la tarea'
}


const argv = require('yargs')
                .command('crear', 'Crear una tarea', {descripcion})
                .command('actualizar', 'Actualizar el estado de una tarea', { 
                        descripcion, 
                        completado
                    })
                .command('borrar', 'Elimina una tarea', {descripcion})
                .help()
                .argv;

module.exports = {
    argv
}