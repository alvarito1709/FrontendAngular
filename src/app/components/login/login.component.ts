import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private modal:ModalService, private builder:FormBuilder) { 
    this.form = this.builder.group(
      {
        usuario:['', Validators.required, Validators.minLength(6)],
        contraseña:['', Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z.,]')]
      }
    )
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.$login.emit(false)
  }
  get Usuario(){
    return this.form.get("usuario");
  }
  get Password(){
    return this.form.get("contraseña");
  }
  usuarioInvalid(){
    return this.Usuario?.touched && !this.Usuario?.valid;
  }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      alert("¡Gracias! pronto estaré en contacto con usted")
    }
    else {
      this.form.markAllAsTouched();
    }
  }

}
