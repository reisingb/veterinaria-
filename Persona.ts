
export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected dni: number;
    protected domicilio: string;
    protected numeroId: number;
    private static contadorId: number = 1;
     cantidadVisita: number;
     private static contadorVisita: number = 1;


    constructor(nombre: string, apellido: string, dni: number, domicilio: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
        this.numeroId = Persona.contadorId++;
        this.cantidadVisita = Persona.contadorVisita++;
    }

    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getDni() {
        return this.dni;
    }
    getDomicilio() {
        return this.domicilio;
    }
    getNumeroId() {
        return this.numeroId;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    setDni(dni: number) {
        this.dni = dni;
    }
    setDomicilio(domicilio: string): void {
        this.domicilio = domicilio;
    }
    setNumeroId(numeroId: number): void {
        this.numeroId = numeroId;
    }
    getCantidadVisita() {
        return this.cantidadVisita;
    }
    setCantidadVisita() {
        this.cantidadVisita = this.cantidadVisita;
    }

}



