
import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private rubro: string;
    private telefono: number;
    private alta: string;
    private baja: string;

  
    constructor(nombre: string, numeroId: string, rubro: string, telefono: number, alta: string, baja: string) {
        super (nombre, numeroId); 
        this.rubro = rubro;
        this.telefono = telefono;
        this.alta = alta;
        this.baja = baja;
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
    
    getAlta(): string {
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
    }
}