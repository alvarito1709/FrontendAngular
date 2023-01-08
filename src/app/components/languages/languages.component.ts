import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  habilidad: any;
  porcentajeCompleto: any;
  delete: boolean = false;
  editarSkill: boolean = false;

  constructor(private Sskill: SoftSkillService, private modal: ModalService) { }

  ngOnInit(): void {
   this.llamarSkill();
  }
  takePercentage(){
    return this.porcentajeCompleto = this.habilidad.porcentaje;
  }
  modificarSkills(){
    this.editarSkill = !this.editarSkill;
  }
  deleteSkill(){

    this.delete = !this.delete;

  }
  agregarSkill(){
    this.modal.$soft.emit(true);
  }

  llamarSkill(){
    this.Sskill.list().subscribe(data =>{this.habilidad = data})
  }
  
  //metodos para el backend

  eliminarSkill(id:number){
  
      this.Sskill.borrarSkill(id).subscribe();
      alert("Dato eliminado con exito.");
      window.location.reload();
     
    
  }

}
