import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: FormGroup;

  constructor( private modal: ModalService, private builder: FormBuilder) {
    this.form = this.builder.group(
      {
        nombre:['', [Validators.required, Validators.minLength(4)]],
        mail:['', [Validators.required, Validators.email]],
        mensaje:[''],
      }
    )
   }

  ngOnInit(): void {
  }
  closeModal(){
    this.modal.$modal.emit(false)
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Mail(){
    return this.form.get("mail");
  }
  get mensaje(){
    return this.form.get("mensaje");
  }
  nombreInvalid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
  mailInvalid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      this.closeModal();
      alert("¡Gracias! pronto estaré en contacto con usted.")
      
    }
    else {
      this.form.markAllAsTouched();
    }
  }
  
  

}
