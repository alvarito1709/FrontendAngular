import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.modal.$educacion.emit(false);

  }
  
  modificar(){
//cambia el estado de modificar a agregar
    this.modificarToggle = !this.modificarToggle;
    
  }
  get titulo(){
    return this.form.get("titulo");
  }
  get descripcion(){
    return this.form.get("descripcion");
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
