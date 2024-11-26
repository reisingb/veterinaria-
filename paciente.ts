export class Paciente {
    private nombre: string;
    private especie: string;
    private edad: number;
    private raza: string;
    private numeroID: number;
    private static contadorId: number = 1;
    private cantidadVisita: number;
    private static contadorVisita: number = 1;

    constructor(nombre: string, especie: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.especie = this.clasificarEspecie(especie);
        this.edad = edad;
        this.raza = raza;
        this.numeroID = Paciente.contadorId;
        this.cantidadVisita = Paciente.contadorVisita;
    }

    private clasificarEspecie(especie: string): string {
        const especiesComunes = ["perro", "gato"];
        return especiesComunes.includes(especie.toLowerCase()) ? especie : "exótica";
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
        this.especie = this.clasificarEspecie(especie);
    }


    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number) {
        this.edad = edad;
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