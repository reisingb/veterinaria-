import { Cliente } from './Cliente';

export class ClienteVIP extends Cliente {
    private beneficios: string[];

    constructor(nombre: string, apellido: string, dni: number, domicilio: string, id: number, telefono: number) {
        super(nombre, apellido, dni, domicilio, id, telefono);
        this.beneficios = [
            "Descuento del 20% en compras y consultas",
            "Atención domiciliaria",
            "Servicio de peluquería",
        ];
    }

    obtenerBeneficios(): string[] {
        return this.beneficios;
    }

    agregarBeneficio(beneficio: string): void {
        if (!this.beneficios.includes(beneficio)) {
            this.beneficios.push(beneficio);
        }
    }

    eliminarBeneficio(beneficio: string): void {
        this.beneficios = this.beneficios.filter(b => b !== beneficio);
    }

    aplicarDescuento(monto: number): number {
        const descuento = 0.20;
        return monto - (monto * descuento);
    }

    public mostrarResumen(): string {
        return `Cliente VIP: ${this.nombre} ${this.apellido}, ID: ${this.getId()}, Dirección: ${this.domicilio}, Visitas: ${this.cantidadVisita}\n Beneficios: ${this.beneficios}`;
    }
}
