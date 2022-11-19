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

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor => this.modalSwitch = valor));
    this.modal.$login.subscribe((valor => this.loginSwitch = valor));
  }

}
