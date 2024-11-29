import { Cliente } from "./Cliente";
import { Proveedor } from "./Proveedor";
import { Paciente } from "./Paciente";

export class Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;
    private static idsGenerados: Set<number> = new Set();
    private clientes: Cliente[] = [];
    private proveedores: Proveedor[] = [];
    private pacientes: Paciente[] = [];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = this.generarIdUnico();
    }

    private generarIdUnico(): number {
        let idGenerado: number;
        do {
            idGenerado = Math.floor(Math.random() * 10000);
        } while (Veterinaria.idsGenerados.has(idGenerado));
        Veterinaria.idsGenerados.add(idGenerado);
        return idGenerado;
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

    agregarCliente(cliente: Cliente): void {
        const nuevoId = this.generarIdUnico();
        cliente.setId(nuevoId);

        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.getNombre()} ${cliente.getApellido()}, D.N.I: ${cliente.getDni()}, dirección: ${cliente.getDomicilio()}, teléfono: ${cliente.getTelefono()}, Id: ${cliente.getId()}  agregado`);
    }

    modificarCliente(id: number, nuevoDomicilio?: string, nuevoTelefono?: number): void {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            if (nuevoDomicilio) {
                cliente.setDomicilio(nuevoDomicilio);
                console.log(`Cliente con ID ${id} ha cambiado su dirección a: ${nuevoDomicilio}`);
            }
            if (nuevoTelefono) {
                cliente.setTelefono(nuevoTelefono);
                console.log(`Cliente con ID ${id} ha cambiado su teléfono a: ${nuevoTelefono}`);
            }
        } else {
            console.log(`Cliente con ID ${id} no encontrado`);
        }
    }

    eliminarCliente(id: number): void {
        this.clientes = this.clientes.filter(c => c.getId() !== id);
        console.log(`Cliente con ID ${id} ha sido eliminado`);
    }


    agregarProveedor(proveedor: Proveedor): void {
        const nuevoId = this.generarIdUnico();
        proveedor.setId(nuevoId);
        this.proveedores.push(proveedor);
        console.log(`Proveedor ${proveedor.getNombre()} ${proveedor.getApellido()}, D.N.I: ${proveedor.getDni()}, dirección: ${proveedor.getDomicilio()}, rubro: ${proveedor.getRubro()}, teléfono: ${proveedor.getTelefono()}, Id: ${proveedor.getId()} agregado`)
    };

    modificarProveedor(id: number, nuevoDomicilio?: string, nuevoRubro?: string, nuevoTelefono?: number): void {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            if (nuevoDomicilio) {
                proveedor.setDomicilio(nuevoDomicilio);
                console.log(`Proveedor con ID ${id} ha cambiado su dirección a: ${nuevoDomicilio}`);
            }
            if (nuevoTelefono) {
                proveedor.setTelefono(nuevoTelefono);
                console.log(`Proveedor con ID ${id} ha cambiado su teléfono a: ${nuevoTelefono}`);
            }
            if (nuevoRubro) {
                proveedor.setRubro(nuevoRubro);
                console.log(`Proveedor con id ${id} ha cambiado su rubro a: ${nuevoRubro}`)
            }
        } else {
            console.log(`Proveedor con ID ${id} no encontrado`);
        }
    }

    eliminarProveedor(id: number): void {
        this.proveedores = this.proveedores.filter(p => p.getId() !== id);
        console.log(`Proveedor con ID ${id} ha sido eliminado`);
    }

    agregarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
        console.log(`Paciente ${paciente.getNombre()} ${paciente.getEspecie()}, Edad: ${paciente.getEdad()}, raza: ${paciente.getRaza()}, Id: ${paciente.getNumeroID()} agregado`)
    }

    modificarPaciente(id: number, nuevaEdad: number): void {
        const paciente = this.pacientes.find(p => p.getNumeroID() === id);
        if (paciente) {
            paciente.setEdad(nuevaEdad);
            console.log(`Edad del paciente con ID ${id} ha sido modificada a: ${nuevaEdad}`);
        } else {
            console.log(`Paciente con ID ${id} no encontrado`);
        }
    }

    eliminarPaciente(id: number): void {
        this.pacientes = this.pacientes.filter(p => p.getNumeroID() !== id);
        console.log(`Paciente con ID ${id} ha sido eliminado`);
    }
};