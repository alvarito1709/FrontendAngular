import { Component, OnInit } from '@angular/core';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  experiencia: any;
  educacion: any;

  constructor(private experiencias:AcercaDeServiceService, private modal:ModalService) { }

  ngOnInit(): void {
    this.experiencias.getDatos().subscribe((dato: { Experiencia: any; }) => {
      this.experiencia = dato.Experiencia;
      this.experiencias.getDatos().subscribe((dato =>{
        this.educacion = dato.Educacion;
      }))
    })
    
  }

  desplegarModal(){
    //despliega el modal de modificacion o agregacion 
    this.modal.$experiencia.emit(true);
  }
  desplegarModificar(){
    this.modal.$educacion.emit(true);
  }

}
