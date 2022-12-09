import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/service/modal.service';


@Component({
  selector: 'app-modificar-info',
  templateUrl: './modificar-info.component.html',
  styleUrls: ['./modificar-info.component.css']
})
export class ModificarInfoComponent implements OnInit {
  form: FormGroup;
  modificarToggle: boolean = false;

  constructor(private builder:FormBuilder, private modal:ModalService) {
    this.form = this.builder.group(
      {
        titulo:['',Validators.required],
        decripcion:['', Validators.required, Validators.maxLength(200)],
        nombre:['', Validators.required, Validators.minLength(4)],
        foto:['', Validators.required],
        banner: ['', Validators.required]
        
      }
    )
   }
  ngOnInit(): void {
  }
  onEnviar(event:Event){

  }
  closeModal(){
    this.modal.$info.emit(false);

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
  get nombre(){
    return this.form.get("nombre");
  }
  get foto(){
    return this.form.get("foto");
  }
  get banner(){
    return this.form.get("banner");
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
