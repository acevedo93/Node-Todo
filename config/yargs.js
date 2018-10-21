const configs = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
    completado: {
        alias: 'c',
        default: true,
    }
}

const argv = require('yargs')
    .command('crear','Crea una tarea por hacer', configs)
    .command('completado','verifica si una tarea esta completada', configs)
    .command('actualizar', 'Actualiza la lista de tareas',configs)
    .command('borrar','borrar una tarea especifica',configs)
    .help().argv

module.exports = {
    argv
}

