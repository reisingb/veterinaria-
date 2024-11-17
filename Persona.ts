

export class Persona{
    private nombre:string;
    private apellido:string;
    private dni:number;
    private domicilio:string;
    private numeroId:number;
    private cantidadVisita:number;


    constructor(nombre:string,apellido:string,dni:number,domicilio:string,numeroId:number,cantidadVisita:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.domicilio=domicilio;
        this.numeroId=numeroId;
        this.cantidadVisita=cantidadVisita;
    }

    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getDni(){
        return this.dni;
    }
    getDomicilio(){
        return this.domicilio;
    }
    getNumeroId(){
        return this.numeroId;
    }
    setNombre(nombre:string):void{
        this.nombre=nombre;
    }
    setApellido(apellido:string):void{
        this.apellido=apellido;
    }
    setDni(dni:number){
        this.dni=dni;
    }
    setDomicilio(domicilio:string):void{
        this.domicilio=domicilio;
    }
    setNumeroId(numeroId:number):void{
        this.numeroId=numeroId;
    }
    getCantidadVisita(){
        return this.cantidadVisita;
    }
    setCantidadVisita(){
        this.cantidadVisita=this.cantidadVisita;
    }
   
}



