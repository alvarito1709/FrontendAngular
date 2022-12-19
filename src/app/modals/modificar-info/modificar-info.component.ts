import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { ModalService } from 'src/app/service/modal.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-modificar-info',
  templateUrl: './modificar-info.component.html',
  styleUrls: ['./modificar-info.component.css']
})
export class ModificarInfoComponent implements OnInit {
  form: FormGroup;
  Titulo: string = '';
  Descripcion: string = '';
  Nombre: string = '';
  Foto: string = '';
  Banner: string = '';

  modificarToggle: boolean = false;

  constructor(private builder:FormBuilder, private modal:ModalService, private sPersona:PersonaService ) {
    this.form = this.builder.group(
      {
        Titulo:['',Validators.required],
        Descripcion:['', Validators.required, Validators.maxLength(255)],
        Nombre:['', Validators.required, Validators.minLength(4)],
        Foto:['', Validators.required],
        Banner: ['', Validators.required]
        
      }
    )
   }
  ngOnInit(): void {
  }
  onEnviar(event:Event){
    event.preventDefault;

    if (this.form.valid){
      this.closeModal();
      this.crearInfo();
      alert("Datos de persona creado exitosamente.")
      
    }
    else {
      this.form.markAllAsTouched();
    };

  }
  closeModal(){
    this.modal.$info.emit(false);

  }
  
  modificar(){
//cambia el estado de modificar a agregar
    this.modificarToggle = !this.modificarToggle;
    
  }
// crea una nueva entidad persona
  crearInfo(): void{
    const id: number = 4;
    const perso = new Persona (this.Titulo, this.Descripcion, this.Nombre, this.Foto, this.Banner);
    this.sPersona.editarPersona(perso, 4).subscribe(data => {alert("persona añadida") 
    window.location.reload();
  }, err=>{
    alert("Hubo una falla en la carga. Intente nuevamente.");
    window.location.reload();
  })

  }

  get titulo(){
    return this.form.get("Titulo");
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
