import { Persona } from './Persona';

export class Cliente extends Persona {
    cantidadVisita: number;
    clienteVIP: boolean;

    constructor(nombre: string, apellido: string, dni: number, domicilio: string, numeroId: number, cantidadVisita: number) {
        super(nombre, apellido, dni, domicilio, numeroId, cantidadVisita);
        this.cantidadVisita = 0;
        this.clienteVIP = false;
    }

    sumarVisita() {
        this.cantidadVisita++;
        if (this.cantidadVisita >= 5) {
            this.clienteVIP = true;
        }
    }
};


