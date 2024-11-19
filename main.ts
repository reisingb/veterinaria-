
import { Proveedor } from "./Proveedor";
import {Veterinaria} from "./Veterinaria";
import { Paciente } from "./paciente";
import { RedVeterinaria } from "./RedVeterinaria";
import { Cliente } from "./Cliente";
import { ClienteVIP } from "./ClienteVip";

let veterianaria1:Veterinaria= new Veterinaria("los alamos","albaro barros",1);
let veterianaria2: Veterinaria=new Veterinaria("el calden","moya 4010",2);
console.log(veterianaria1);
console.log(veterianaria2);


let proveedor1:Proveedor=new Proveedor("carlos",1,"laboratorio",2284155023);
let proveedor2:Proveedor=new Proveedor("juan",2,"alimentos",2284158475);
console.log(proveedor1);
console.log(proveedor2);

let paciente1:Paciente =new Paciente("milky","mamifero",5,"felino",1,1);
let paciente2:Paciente =new Paciente("boby","mamifero",4,"canino",2,1);
let paciente3:Paciente =new Paciente("lazzo","mamifero",6,"equino",3,5);
console.log(paciente1);
console.log(paciente2);
console.log(paciente3);

paciente3.getCantidadVisita();
console.log(paciente3.getCantidadVisita());

