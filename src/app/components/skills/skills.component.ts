import { Component, OnInit } from '@angular/core';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: any = [];
  delete: boolean = false;
  editarSkill: boolean = false;

  constructor(private sSkill:HardSkillService, private modal:ModalService) { }

  ngOnInit(): void {
    this.llamarSkill();
  }
  modificarSkills(){
    this.editarSkill = !this.editarSkill;
  }
  deleteSkill(){
    this.delete = !this.delete;

  }

  desplegarAgregarSkill(){
    this.modal.$skills.emit(true);
  }

  //metodos para el backend

  llamarSkill(): void{
    this.sSkill.list().subscribe(data =>{
      this.skill = data;
    })
  }

  eliminarSkill(id:number): void{
    this.sSkill.eliminarSkill(id).subscribe(data => alert("Skill borrada con exito."));
  }


}
