export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected dni: number;
    protected domicilio: string;
    protected numeroId: number;
    protected cantidadVisita: number = 0;

    private static idsGenerados: Set<number> = new Set();

    constructor(nombre: string, apellido: string, dni: number, domicilio: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
        this.numeroId = this.generarIdUnico();
    }

    private generarIdUnico(): number {
        let idGenerado: number;
        do {
            idGenerado = Math.floor(Math.random() * 10000);
        } while (Persona.idsGenerados.has(idGenerado));

        Persona.idsGenerados.add(idGenerado);
        return idGenerado;
    }
}
