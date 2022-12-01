import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {
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
    this.modal.$experiencia.emit(false);

  }
  
  modificar(){
//cambia el estado de modificar a agregar
    this.modificarToggle = !this.modificarToggle;
    
  }

}
