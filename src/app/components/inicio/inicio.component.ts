import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  modalSwitch: boolean = false;
  loginSwitch: boolean = false;
  modificarExperiencia: boolean = false;
  modificarEducacion: boolean = false;

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor => this.modalSwitch = valor));
    this.modal.$login.subscribe((valor => this.loginSwitch = valor));
    this.modal.$experiencia.subscribe((valor => this.modificarExperiencia = valor));
    this.modal.$educacion.subscribe((valor => this.modificarEducacion = valor))
   
  }

}
