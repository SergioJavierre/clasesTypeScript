import {Persona} from './Persona'
import {Saludador} from '../interfaces/Saludador'

class Profesor extends Persona implements Saludador{
    
    trabajar(){
        console.log("Dando clase")
    }

    saluda(){
        console.log("Hola, soy "+this.nombre)
    }
}

export {Profesor}