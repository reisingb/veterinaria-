
export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected dni: number;
    protected domicilio: string;
    protected numeroId: number;
            cantidadVisita: number;

    // Conjunto para almacenar los IDs generados
    private static idsGenerados: Set<number> = new Set();

    constructor(nombre: string, apellido: string, dni: number, domicilio: string, cantidadVisita: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.domicilio = domicilio;
        this.cantidadVisita = cantidadVisita;
        this.numeroId = Persona.generarIdUnico(); // Asignamos el ID único al crear la persona
    }

    // Método estático para generar ID único
    private static generarIdUnico(): number {
        let idGenerado: number;
        do {
            // Generamos un ID aleatorio, por ejemplo, un número entre 1000 y 9999
            idGenerado = Math.floor(Math.random() *1000) + 0;
        } while (Persona.idsGenerados.has(idGenerado)); // Si el ID ya existe, lo generamos nuevamente

        Persona.idsGenerados.add(idGenerado); // Si no existe, lo agregamos al conjunto
        return idGenerado;
    }

    // Métodos de acceso
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
    }}