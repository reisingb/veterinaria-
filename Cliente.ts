import { Persona } from './Persona';

export class Cliente extends Persona {
    static getNombre() {
        throw new Error("Method not implemented.");
    }
    clienteVip: boolean= false;
    


    constructor(nombre: string, apellido: string, dni: number, domicilio: string) {
        super(nombre, apellido, dni, domicilio);
        this.clienteVip = this.clienteVip;

    }


    getNombre(): string {
       return this.nombre; 
    }
    setNombre(nombre: string): void {
        this.nombre= nombre;
    }
    getClienteVip(){
        return this.clienteVip;
    }
    setClienteVip(clienteVip:boolean):void{
        this.clienteVip= clienteVip;
    }
    
    sumarVisita(){
         if(this.cantidadVisita >=5 ){

            return this.clienteVip;
         }
         console.log("el cliente llego a 5 visitas ahora puede acceder a los beneficios");

        
        }
};




