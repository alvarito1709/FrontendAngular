import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modificar-educacion',
  templateUrl: './modificar-educacion.component.html',
  styleUrls: ['./modificar-educacion.component.css']
})
export class ModificarEducacionComponent implements OnInit {
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
    this.modal.$educacion.emit(false);

  }
  
  modificar(){
//cambia el estado de modificar a agregar
    this.modificarToggle = !this.modificarToggle;
    
  }

}
