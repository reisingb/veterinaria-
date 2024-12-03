import { Persona } from './Persona';

export class Cliente extends Persona {
    private clienteVip: boolean = false;
    private id: number;
    private telefono: number;

    constructor(nombre: string, apellido: string, dni: number, domicilio: string, id: number, telefono: number, cantidadVisita: number) {
        super(nombre, apellido, dni, domicilio, cantidadVisita);
        this.id = id;
        this.cantidadVisita = cantidadVisita;
        this.telefono = telefono;
    }

    sumarVisita(): void {
        this.cantidadVisita++;
        if (this.cantidadVisita >= 5) {
            this.clienteVip = true;
            console.log("El cliente ha llegado a 5 visitas y ahora es VIP.");
        }
    }

    isClienteVip(): boolean {
        return this.clienteVip;
    }

    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    getApellido(): string {
        return this.apellido;
    }

    getDni(): number {
        return this.dni;
    }

    getDomicilio(): string {
        return this.domicilio;
    }

    getTelefono(): number {
        return this.telefono;
    }


    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    setDni(dni: number): void {
        this.dni = dni;
    }

    setDomicilio(domicilio: string): void {
        this.domicilio = domicilio;
    }

    setId(id: number): void {
        this.id = id;
    }

    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
    getCantidadVisita(): number {
        return this.cantidadVisita;
    }

    setCantidadVisita(cantidadVisita: number): void {
        this.cantidadVisita = cantidadVisita;
    }

    public mostrarResumen(): string {
        return `Cliente: ${this.nombre} ${this.apellido}, ID: ${this.id}, Dirección: ${this.domicilio}, Visitas: ${this.cantidadVisita}`;
    }

};












