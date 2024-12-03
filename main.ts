import { Veterinaria } from "./Veterinaria";
import { RedVeterinaria } from "./RedVeterinaria";
import { Cliente } from "./Cliente";
import { ClienteVIP } from './ClienteVip';
import { Proveedor } from "./Proveedor";
import { Paciente } from "./Paciente";

// Crear instancia de RedVeterinaria
const redVeterinaria = new RedVeterinaria();

// Crear veterinarias
const veterinaria1 = new Veterinaria("Los Álamos", "Albaro Barros 2864");
const veterinaria2 = new Veterinaria("El Caldén", "Moya 4010");

// Agregar veterinarias a la red
redVeterinaria.agregarVeterinaria(veterinaria1, veterinaria1.getId());
redVeterinaria.agregarVeterinaria(veterinaria2, veterinaria2.getId());
console.log();
// Crear proveedores
const proveedor1 = new Proveedor("Carlos", "Pérez", 3025985, "Las Rosas 2010", "Laboratorio", 2284155023, 1);
const proveedor2 = new Proveedor("Manuel", "Saenz", 30164585, "Mitre", "Alimentos", 2284155024, 1);

// Agregar proveedores a la veterinaria1
veterinaria1.agregarProveedor(proveedor1);
veterinaria1.agregarProveedor(proveedor2);
console.log();
// Crear clientes
const cliente1 = new Cliente("Germán", "Rodriguez", 34000258, "Av. Siempre Viva 300", 1, 22845555, 0);
const cliente2 = new Cliente("Adrián", "Gutierrez", 36000895, "Av. Siempre Viva 524", 2, 2284565656, 0);

// Agregar clientes a la veterinaria1
veterinaria1.agregarCliente(cliente1);
veterinaria1.agregarCliente(cliente2);
console.log();
// Crear pacientes
const paciente1 = new Paciente("Milky", "gato", 5, "Siames");
const paciente2 = new Paciente("Boby", "perro", 4, "Labrador");
const paciente3 = new Paciente("Rex", "hurón", 3, "Americano")


// Agregar pacientes a la veterinaria1
veterinaria1.agregarPaciente(paciente1);
veterinaria1.agregarPaciente(paciente2);
veterinaria1.agregarPaciente(paciente3);
console.log();
// Simular visitas de clientes
cliente1.sumarVisita();
cliente1.sumarVisita();
cliente1.sumarVisita();
cliente1.sumarVisita();
cliente1.sumarVisita();

// Mostrar información de cliente VIP
if (cliente1.isClienteVip()) {
    const clienteVip1 = new ClienteVIP(cliente1.getNombre(), cliente1.getApellido(), cliente1.getDni(), cliente1.getDomicilio(), cliente1.getId(), cliente1.getTelefono(), cliente1.getCantidadVisita());
    console.log(clienteVip1.mostrarResumen());

    console.log("Beneficios del Cliente VIP:");
    console.log(clienteVip1.obtenerBeneficios().join(", "));
    //Simular compra
    const precioCompra = 100;
    const precioConDescuento = clienteVip1.aplicarDescuento(precioCompra);
    console.log(`Precio de compra: $${precioCompra}`);
    console.log(`Precio con descuento: $${precioConDescuento}`);
    // Eliminar beneficio
    clienteVip1.eliminarBeneficio("Atención domiciliaria");
    console.log("El beneficio de atención domiciliaria ha sido eliminado")
    // Agregar beneficio
    clienteVip1.agregarBeneficio("2 consultas gratuitas por mes");
    console.log("Se agrego un nuevo beneficio por ser Cliente VIP:");
    console.log(clienteVip1.obtenerBeneficios().join(", "));
}
console.log();
// Modificar información de una veterinaria
redVeterinaria.modificarVeterinaria(veterinaria1.getId(), "Veterinaria Los Álamos Modificada", "Nueva Dirección 123");

// Eliminar una veterinaria
redVeterinaria.eliminarVeterinaria(veterinaria2.getId());
console.log();

//Modificar un cliente
veterinaria1.modificarCliente(cliente2.getId(), "Av. Pringles 1555", 0)
// Eliminar un cliente
veterinaria1.eliminarCliente(cliente1.getId());
console.log();
// Modificar un proveedor
veterinaria1.modificarProveedor(proveedor1.getId(), "Nueva Dirección Pringles 9999");
// Eliminar un proveedor
veterinaria1.eliminarProveedor(proveedor2.getId());
console.log();
// Modificar un paciente
veterinaria1.modificarPaciente(paciente1.getNumeroID(), 6);
// Eliminar un paciente
veterinaria1.eliminarPaciente(paciente3.getNumeroID());
console.log();