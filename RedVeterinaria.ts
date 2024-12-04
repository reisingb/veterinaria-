import { Veterinaria } from "./Veterinaria";

export class RedVeterinaria {
    private veterinarias: Veterinaria[] = [];

    agregarVeterinaria(veterinaria: Veterinaria, id: number) {
        this.veterinarias.push(veterinaria);
        console.log(`Veterinaria ${veterinaria.getNombre()} ${id} agregada`);
    }

    eliminarVeterinaria(id: number) {
        this.veterinarias = this.veterinarias.filter(v => v.getId() !== id);
        console.log(`Veterinaria ${id} ha sido eliminada`);
    }

    modificarVeterinaria(id: number, nuevoNombre: string, nuevaDireccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getId() === id);
        if (veterinaria) {
            veterinaria.setNombre(nuevoNombre);
            veterinaria.setDireccion(nuevaDireccion);
            console.log(`Veterinaria ${id} ha sido modificada`);
        } else {
            console.log(`Veterinaria ${id} no encontrada`);
        }
    }
};







