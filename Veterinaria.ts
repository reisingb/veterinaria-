import { stringify } from "querystring";
import { Cliente } from "./Cliente";
import { Persona } from "./Persona";

export class Veterinaria{
    private nombre: string;
    private direccion: string;
    private id:number;
    private personas:Persona[]=[];
    private clientes:Cliente[]=[];
    
    

    constructor(nombre:string,direccion:string,id:number,){
        this.nombre=nombre;
        this.direccion=direccion;
        this.id=id;
       
        
    }

    getNombre(){
        return this.nombre;
    }
    getDireccion(){
       return this.direccion;
    }
    getId(){
        return this.id;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    setDireccion(direccion:string){
        this.direccion=direccion;
    }
    setId(id:number){
        this.id=id;
    }
    getPaciente(){
        return this.personas;
    }
    getCiente(){
        return this.clientes;
    }
   /*  setConsulta(persona:Persona):void{
        this.personas.push();
        console.log(` paciente nuevo ${this.personas.getNombre()} agregado`);
    }
    agregarCliente(persona:Persona){
        this.clientes.push(persona);
        console.log(` cliente ${Cliente.getNombre()} agregado`);
    
    }
    eliminarCliente(veterinarias:Veterinaria){
        this.veterinarias= this.veterinarias.filter(veterinarias=> veterinarias.getNombre());
        console.log(`veterinaria selecionada ${veterinarias.getNombre()} ha sido eliminada`); 
    } */
} 
