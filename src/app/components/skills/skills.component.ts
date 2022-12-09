import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: any;
  delete: boolean = false;

  constructor(private http:AcercaDeServiceService, private modal:ModalService) { }

  ngOnInit(): void {
    this.http.getDatos().subscribe((dato =>{
      this.skill = dato.HardSkills;
    }))
  }
  modalSkills(){
    this.modal.$skills.emit(true);
  }
  deleteSkill(){
    this.delete = !this.delete;

  }


}
