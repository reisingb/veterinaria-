import { stringify } from "querystring";
import { Veterinaria } from "./Veterinaria";


export class RedVeterinaria{
    private veterinarias:Veterinaria[]=[];
    protected alta:string;
    protected baja:string;
    protected modificar:string;
   

    constructor(alta:string,baja:string,modificar:string,){
        this.alta=alta;
        this.baja=baja;
        this.modificar=modificar;
        
    }
     getAlta(){
        return this.alta;
    }
    getBaja(){
        return this.baja;
    }
    getModificar(){
        return this.modificar;
    }
    setBaja(){
        this.baja=this.baja;

    }
    setModificar(modificar:string){
        this.modificar=this.modificar;
    }
    
    agregarVeterinaria(veterinarias:Veterinaria){
        this.veterinarias.push(veterinarias);
        console.log(` veterinaria ${veterinarias.getNombre()} agregada`);
    
    }
    eliminarVeterinaria(veterinarias:Veterinaria){
        this.veterinarias= this.veterinarias.filter(veterinarias=> veterinarias.getNombre());
        console.log(`veterinaria selecionada ${veterinarias.getNombre()} ha sido eliminada`); 
    }
   
    }
    
    
   

 

    



