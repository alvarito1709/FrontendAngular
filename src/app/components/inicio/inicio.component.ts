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
  modificarInfo: boolean = false;
  modificarSkills: boolean = false;
  modificarSoft: boolean = false;
  modificarProyecto: boolean = false;

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor => this.modalSwitch = valor));
    this.modal.$login.subscribe((valor => this.loginSwitch = valor));
    this.modal.$experiencia.subscribe((valor => this.modificarExperiencia = valor));
    this.modal.$educacion.subscribe((valor => this.modificarEducacion = valor));
    this.modal.$info.subscribe((valor => this.modificarInfo = valor));
    this.modal.$skills.subscribe((valor => this.modificarSkills = valor));
    this.modal.$soft.subscribe((valor => this.modificarSoft = valor));
    this.modal.$proyecto.subscribe((valor => this.modificarProyecto = valor));
   
  }

}
