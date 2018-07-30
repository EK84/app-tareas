const fs = require ('fs');

let listadoTareas = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoTareas);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('Se ha producido un error');
    });
}

const cargarDB = () => {

    try {
        listadoTareas = require('../db/data.json');
    
    } catch (error) {
        listadoTareas = [];
    } 
}

const crear =  (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);

    guardarDB();

    return tarea;
}

const getListado = () => {
    
    cargarDB();

    return listadoTareas;
}

const actualizar = (desc, compl = true) => {
    
    cargarDB();

    let index = listadoTareas.findIndex( (tarea) => {
        return tarea.descripcion === desc;
    });

    if (index >= 0) {
        listadoTareas[index].completado = compl;
        guardarDB();
        
        return true;
    
    }else{
        return false;
    } 
}

const borrar = (desc) => {

    cargarDB();

    let newListado = listadoTareas.filter( (tarea) => {
        return tarea.descripcion !== desc
    });

    if ( listadoTareas.length === newListado.length ){
        return 'No se encontron ninguna tarea con esa descripción'
    
    }else{
        listadoTareas = newListado;
        guardarDB();
        return 'Tarea borrada correctamente'
    }
}


module.exports = {
    crear,
    getListado,
    actualizar, 
    borrar
}