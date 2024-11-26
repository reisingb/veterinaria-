
import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private rubro: string;
    private telefono: number;
    static getNombre: any;

  
    constructor(nombre:string,apellido:string,domicilio:string,dni:number,rubro: string, telefono: number) {
        super(nombre,apellido,dni,domicilio); 
        this.rubro = rubro;
        this.telefono = telefono;
    
    }

    
    getRubro(): string {
        return this.rubro;
    }

    setRubro(value: string) {
        this.rubro = value;
    }

    
    getTelefono(): number {
        return this.telefono;
    }

    setTelefono(value: number) {
        this.telefono = value;
    }
    
   /*  getAlta(): string {
        return this.alta;
    }

    setAlta(value: string) {
        this.alta = value;
    }

    
    getBaja(): string {
        return this.baja;
    }

    setBaja(value: string) {
        this.baja = value;
    } */
}