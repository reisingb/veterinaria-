import { Cliente } from './Cliente';

export class ClienteVIP extends Cliente {
    private beneficios: string[];

    constructor(nombre: string, apellido: string, dni: number, domicilio: string, numeroId: number, telefono: number, cantidadVisita: number) {
        super(nombre, apellido, dni, domicilio, numeroId, telefono, cantidadVisita);
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
        this.beneficios = this.beneficios.filter((b) => b !== beneficio);
    }
    aplicarDescuento(monto: number): number {
        const descuento = 0.20;
        return monto - (monto * descuento);
    }
    mostrarResumen(): string {
        return `
            Cliente VIP: ${this.getNombre} ${this.getApellido}
            DNI: ${this.getDni}
            Domicilio: ${this.getDomicilio}
            Número ID: ${this.getId}
            Cantidad de Visitas: ${this.getCantidadVisita}
            Beneficios Exclusivos: ${this.beneficios.join(", ")}
        `;
    }
};
