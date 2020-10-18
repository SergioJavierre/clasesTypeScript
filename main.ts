import {Coche} from './clases/Coche'
import {Profesor} from './clases/Profesor'


const ejemploCoche = () => {
    let coche = new Coche()
    coche.velocidad = 100
    
    const distancia = 200 //km
    console.log(
        "Recorrer "+distancia+"km a "+coche.velocidad+"Km/h"+
        " cuesta "+coche.tiempoRecorrido(distancia)+"h")
}

//ejemploCoche()

const ejemploProfesor = () => {
    let profesor = new Profesor()
    profesor.nombre = "Sergio"
    profesor.saluda()
    profesor.trabajar()
}

ejemploProfesor()