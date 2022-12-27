export class Persona {
    id: number;
    titulo: string;
    descripcion: string;
    nombre: string;
    foto: string;
    banner: string;

    constructor( titulo:string, descripcion: string, nombre: string, foto: string, banner: string){
        this.id = 1;
       this.titulo = titulo;
       this.descripcion = descripcion;
       this.nombre = nombre;
       this.foto = foto;
       this.banner = banner;
    }
}
