import { Cliente } from "./Cliente";
import { Persona } from "./Persona";
import { Proveedor } from "./Proveedor";

export class Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;
    private static contadorId: number = 1;
    private personas: Persona[] = [];
    private clientes: Cliente[] = [];
    private proveedores: Proveedor[] = [];

    constructor(nombre: string, direccion: string, id: number, personas: Persona[]) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
        this.personas = personas;
    }

    getNombre(): string {
        return this.nombre;
    }

    getDireccion(): string {
        return this.direccion;
    }

    getId(): number {
        return this.id;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    setId(id: number): void {
        this.id = id;
    }

    getPersonas(): Persona[] {
        return this.personas;
    }

    getPacientes(): Persona[] {
        return this.personas; // Podría ser más específico si se tiene una lógica para filtrar pacientes
    }

    agregarPaciente(paciente: Persona): void {
        this.personas.push(paciente);
        console.log(`Paciente nuevo ${paciente.getNombre()} agregado`);
    }

    agregarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.getNombre()} agregado`);
    }

    eliminarCliente(cliente: Cliente): void {
        this.clientes = this.clientes.filter(c => c.getNombre() !== cliente.getNombre());
        console.log(`Cliente seleccionado ${cliente.getNombre()} ha sido eliminado`);
    }

    agregarProveedor(proveedor: Proveedor): void {
        this.proveedores.push(proveedor);
        console.log(`Proveedor ${proveedor.getNombre()} agregado`);
    }

    eliminarProveedor(proveedor: Proveedor): void {
        this.proveedores = this.proveedores.filter(p => p.getNombre() !== proveedor.getNombre());
        console.log(`Proveedor seleccionado ${proveedor.getNombre()} ha sido eliminado`);
    }
}