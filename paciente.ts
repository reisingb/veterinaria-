export class Paciente {
    private nombre: string;
    private especie: string;
    private edad: number;
    private raza: string;
    private numeroID: number;
    private cantidadVisita: number;

    
    constructor(nombre: string, especie: string, edad: number, raza: string, numeroID: number, cantidadVisita: number)
     {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.raza = raza;
        this.numeroID = numeroID;
        this.cantidadVisita = cantidadVisita;
    }


    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getEspecie(): string {
        return this.especie;
    }

    setEspecie(especie: string) {
        this.especie = especie;
    }

   
    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number) {
        this.edad=edad;
        }
    

    
    getRaza(): string {
        return this.raza;
    }

    setRaza(raza: string) {
        this.raza = raza;
    }

    getNumeroID(): number {
        return this.numeroID;
    }

    setNumeroID(numeroID: number) {
        
            this.numeroID = numeroID;
      
        }
    

   
    getCantidadVisita(): number {
        return this.cantidadVisita;
    }

    setCantidadVisita(cantidadVisita: number) {
        
            this.cantidadVisita = cantidadVisita;
        
    }
}