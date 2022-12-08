import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  habilidad: any;
  porcentajeCompleto: any;

  constructor(private http:AcercaDeServiceService, private modal: ModalService) { }

  ngOnInit(): void {
    this.http.getDatos().subscribe((dato =>{
      this.habilidad = dato.Languages;
    }))
  }
  takePercentage(){
    return this.porcentajeCompleto = this.habilidad.porcentaje;
  }
  modificarSkills(){
    this.modal.$soft.emit(true);
  }

}
