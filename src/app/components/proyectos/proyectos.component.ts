import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;
  delete: boolean = false;

  constructor(private http:AcercaDeServiceService, private modal:ModalService) { }

  ngOnInit(): void {
    this.http.getDatos().subscribe((dato => {
      this.proyecto = dato.proyectos;
    }))
  }
  modificarProyectos(){
    this.modal.$proyecto.emit(true);
  }
  deleteProyecto(){
    this.delete = !this.delete;
  }

}
