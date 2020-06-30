import { Publicador } from './publicador';
export class Vivienda {
    codigo: number;
    tipoTerreno: String;      
    precio: number;           
    numHabitaciones: number;  
    numBano: number;          
    tieneGaraje: String;      
    permiteMascota: String;   
    tienecontrolRenta: String;
    tipoPiso: String;         
    tieneCalefaccion: String; 
    tipoEstructura: String;   
    tipoExterior: String;     
    tipoHogar: String;        
    base: String;             
    techo: String;            
    nuevaConstruccion: String;
    anoConstruccion: String;  
    dimension: String;        
    distrito: String;
    numero: String;
    direccion: String;
    ciudad: String;
    fueContactado: number;
    publicador: Publicador;
}
