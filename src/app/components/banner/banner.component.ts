import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { ModalService } from 'src/app/service/modal.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private sPersona: PersonaService, private modal: ModalService) { }

  ngOnInit(): void {
    this.mostrarPersona();
  }

  mostrarPersona(){
    this.sPersona.list().subscribe(dato => {this.persona = dato});
  }

  modificarInfo(){
    
    this.modal.$info.emit(true);

  }

}
