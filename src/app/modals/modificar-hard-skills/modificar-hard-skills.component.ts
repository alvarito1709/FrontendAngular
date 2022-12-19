import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modificar-hard-skills',
  templateUrl: './modificar-hard-skills.component.html',
  styleUrls: ['./modificar-hard-skills.component.css']
})
export class ModificarHardSkillsComponent implements OnInit {
  form: FormGroup;
  modificarToggle: boolean = false;

  constructor(private builder:FormBuilder, private modal:ModalService) {
    this.form = this.builder.group(
      {
        
      }
    )
   }
  ngOnInit(): void {
  }
  onEnviar(event:Event){

  }
  closeModal(){
    this.modal.$skills.emit(false);

  }
  
  modificar(){
//cambia el estado de modificar a agregar
    this.modificarToggle = !this.modificarToggle;
    
  }

}