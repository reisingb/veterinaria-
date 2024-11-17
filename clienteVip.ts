
export class ClienteVip{
    private servicios:string[];
    private porcentajeDescuento:number;

    constructor(servicios: string[], porcentajeDescuento: number) {
        this.servicios = servicios;
        this.porcentajeDescuento = porcentajeDescuento;
    }
}