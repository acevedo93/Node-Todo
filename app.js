const {argv} = require('./config/yargs')
const { crear, listar, actualizar, borrar } = require('./por-hacer/por-hacer')


const comando = argv._[0];
 switch(comando){
     case 'crear':
         let tarea = crear(argv.descripcion)
         break;
     case 'listar':
        let listado = listar()
        console.log('======TO DO=======')
            for (let tarea of listado){ 
                console.log('tarea',tarea.descripcion)
                console.log('Estado', tarea.completado)
                console.log('=============')
            }
         break;
     case 'actualizar':
    
         let listadoActual = actualizar(argv.descripcion,argv.estado)
         if(!listadoActual){
             console.log('no hubieron actualizacion');

         } else {
             console.log('Tarea actualizada correctament');
         }
         break;
    case 'borrar': 
         let borrado = borrar(argv.descripcion)
         if(borrado){
             console.log('Borrado correctamente');
         }else {
            console.log('No se pudo encontrar el archivo')
         }
         break;
     default:
         console.log('default');
         break;
 }