import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private rubro: string;
    private telefono: number;
    private id: number;

    constructor(nombre: string, apellido: string, dni: number, domicilio: string, rubro: string, telefono: number, id: number) {
        super(nombre, apellido, dni, domicilio, 0);
        this.rubro = rubro;
        this.telefono = telefono;
        this.id = id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }


    getDomicilio(): string {
        return this.domicilio;
    }

    getRubro(): string {
        return this.rubro;
    }

    setRubro(value: string): void {
        this.rubro = value;
    }

    getTelefono(): number {
        return this.telefono;
    }

    setTelefono(value: number): void {
        this.telefono = value;
    }

    getId(): number {
        return this.id;
    }

    getDni(): number {
        return this.dni;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    setDomicilio(domicilio: string): void {
        this.domicilio = domicilio;
    }

    setDni(dni: number): void {
        this.dni = dni;
    }

    setId(id: number): void {
        this.id = id;
    }
}
