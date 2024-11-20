import { stringify } from "querystring";
import { Cliente } from "./Cliente";
import { Persona } from "./Persona";
import { Proveedor } from "./Proveedor";

export class Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;
    private personas: Persona[] = [];
    private clientes: Cliente[] = [];
    private proveedores: Proveedor[] = [];

    constructor(nombre: string, direccion: string, id: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;

    }

    getNombre() {
        return this.nombre;
    }
    getDireccion() {
        return this.direccion;
    }
    getId() {
        return this.id;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    setDireccion(direccion: string) {
        this.direccion = direccion;
    }
    setId(id: number) {
        this.id = id;
    }
    getPaciente() {
        return this.personas;
    }
    getCiente() {
        return this.clientes;
    }
    getConsulta(paciente: Persona): void {
        this.personas.push(paciente);
        console.log(` paciente nuevo ${paciente.getNombre()} agregado`);
    }
    agregarCliente(clientes: Cliente) {
        this.clientes.push(clientes);
        console.log(` cliente ${Cliente.getNombre()} agregado`);

    }
    eliminarCliente(clientes: Cliente) {
        this.clientes = this.clientes.filter(c => c.getNombre() !== clientes.getNombre());
        console.log(`cliente selecionado ${clientes.getNombre()} ha sido eliminado`);

    }
    agregarProveedor(proveedores: Proveedor) {
        this.proveedores.push(proveedores);
        console.log(` proveedor ${Proveedor.getNombre()} agregado`);

    }
    eliminarProveedor(proveedores: Proveedor) {
        this.proveedores = this.proveedores.filter(p => p.getNombre() !== proveedores.getNombre());
        console.log(`proveedor selecionado ${proveedores.getNombre()} ha sido eliminado`);

    }
}