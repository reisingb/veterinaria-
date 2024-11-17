import { Persona } from "./Persona";
import { ClienteVip } from "./clienteVip";
export class Cliente{  
    private cantidaPaciente:[];
    private obraSocial:string;
    private tipoCliente:ClienteVip;

    constructor(cantidadPaciente:[], obraSocial:string,tipoCliente:ClienteVip){
        this.cantidaPaciente =cantidadPaciente;
        this.obraSocial = obraSocial;
        this.tipoCliente=tipoCliente;
    }
}
  
class ClienteVip{
    private servicios:string[];
    private porcentajeDescuento:number;

    constructor(servicios: string[], porcentajeDescuento: number) {
        this.servicios = servicios;
        this.porcentajeDescuento = porcentajeDescuento;
    }
}