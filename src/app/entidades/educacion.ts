export class Educacion {
    id!: number;
    descripcion: string;
    tituloObtenido: string;
    periodoComienzo: string;
    periodoFinal: string;
    imagen: string;
    link: string;
    contenido : string;

    constructor(descripcion:string, tituloObtenido: string, periodoComienzo: string,
         periodoFinal: string, imagen: string, link: string, contenido: string){
            
            this.descripcion = descripcion;
            this.tituloObtenido = tituloObtenido;
            this. periodoComienzo = periodoComienzo;
            this.periodoFinal = periodoFinal;
            this.imagen = imagen;
            this.link = link;
            this.contenido = contenido;
    }
}
