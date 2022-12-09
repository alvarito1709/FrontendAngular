import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        titulo:['',Validators.required],
        decripcion:['', Validators.required, Validators.maxLength(200)],
        periodo:[''],
        foto:['', Validators.required],
        link: ['',]
        
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
  get titulo(){
    return this.form.get("titulo");
  }
  get descripcion(){
    return this.form.get("decripcion");
  }
  get periodo(){
    return this.form.get("periodo");
  }
  get foto(){
    return this.form.get("foto");
  }
  get link(){
    return this.form.get("link");
  }
  tituloInvalid(){
    return this.titulo?.touched && !this.titulo?.valid;
  }
  descripcionInvalid(){
    return this.descripcion?.touched && !this.descripcion?.valid;
  }
  fotoInvalid(){
    return this.foto?.touched && !this.foto?.valid;
  }

}
