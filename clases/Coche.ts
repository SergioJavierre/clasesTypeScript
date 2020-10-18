class Coche {
    modelo: string
    velocidad: number //km/h

    tiempoRecorrido(distancia: number /*en km*/): number {
        return distancia / this.velocidad //devuelve horas
    }
}

export{Coche}