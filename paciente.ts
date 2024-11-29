export class Paciente {
    private nombre: string;
    private especie: string;
    private edad: number;
    private raza: string;
    private numeroID: number;
    private cantidadVisita: number;

    private static contadorId: number = 1;

    constructor(nombre: string, especie: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.especie = this.clasificarEspecie(especie);
        this.edad = edad;
        this.raza = raza;
        this.numeroID = Paciente.generarId();
        this.cantidadVisita = 0; // Inicializa la cantidad de visitas en 0
    }
    private static generarId(): number {
        return ++Paciente.contadorId;
    }
    private clasificarEspecie(especie: string): string {
        const especiesComunes = ["perro", "gato"];
        return especiesComunes.includes(especie.toLowerCase()) ? especie : "exótica";
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getEspecie(): string {
        return this.especie;
    }

    setEspecie(especie: string): void {
        this.especie = this.clasificarEspecie(especie);
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getRaza(): string {
        return this.raza;
    }

    getCantidadVisita(): number {
        return this.cantidadVisita;
    }

    setCantidadVisita(cantidad: number): void {
        this.cantidadVisita = cantidad;
    }

    getNumeroID(): number {
        return this.numeroID;
    }
}
