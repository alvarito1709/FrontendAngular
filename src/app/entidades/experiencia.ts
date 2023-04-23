export class Experiencia {
    id!: number;
    titulo: string;
    descripcion: string;
    periodoComienzo: string;
    periodoFinal: string;
    imagen: string;
    link: string;
    responsabilidades: string;

    constructor(titulo: string, descripcion: string, periodoComienzo: string,
         periodoFinal: string, imagen: string, link: string, responsabilidades: string){

            this.titulo = titulo;
            this.descripcion = descripcion;
            this.periodoComienzo = periodoComienzo;
            this.periodoFinal = periodoFinal;
            this.imagen = imagen;
            this.link = link;
            this.responsabilidades = responsabilidades;
    }

}
