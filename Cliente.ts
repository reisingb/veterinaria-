import { Persona } from './Persona';

export class Cliente extends Persona {
    static getNombre() {
        throw new Error("Method not implemented.");
    }
    clienteVip: boolean= false;
    


    constructor(nombre: string, apellido: string, dni: number, domicilio: string, numeroId: number, cantidadVisita: number) {
        super(nombre, apellido, dni, domicilio, numeroId);
        this.cantidadVisita = 0;
        this.clienteVIP = false;
    }
    
    sumarVisita(){
         if(this.cantidadVisita >=5 ){

            return this.clienteVip;
         }
         console.log("el cliente llego a 5 visitas ahora puede acceder a los beneficios");

        
        }
};




