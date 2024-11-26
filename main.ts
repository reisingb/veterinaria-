
import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";
import { Paciente } from "./paciente";
import { RedVeterinaria } from "./RedVeterinaria";
import { Cliente } from "./Cliente";
import { ClienteVIP } from './ClienteVip';

let veterianaria1: Veterinaria = new Veterinaria("los alamos", "albaro barros", 1,[]);
let veterianaria2: Veterinaria = new Veterinaria("el calden", "moya 4010", 2,[]);
console.log(veterianaria1);
console.log(veterianaria2);
 

let proveedor1: Proveedor = new Proveedor("carlos","saenz","las heras",30164585, "laboratorio",2284155023);
let proveedor2: Proveedor = new Proveedor("mauel","saenz","mitre",30164585, "laboratorio",2284155023);
console.log(proveedor1.setCantidadVisita());
console.log(proveedor2);

let cliente1: Cliente = new Cliente("Germán", "Rodriguez", 34000258, "Av.Siempre Viva 300")
console.log(cliente1);
let cliente2: Cliente = new ClienteVIP("Adrián", "Gutierrez", 36000895, "Av.Siempre Viva 524")
console.log(cliente2);



 let paciente1: Paciente = new Paciente("milky", "mamifero", 5, "felino");
let paciente2: Paciente = new Paciente("boby", "mamifero", 4, "canino");
let paciente3: Paciente = new Paciente("lazzo", "mamifero", 6, "equino");
console.log(paciente1);
console.log(paciente2);
console.log(paciente3);

 paciente1.setCantidadVisita(5);
 
  