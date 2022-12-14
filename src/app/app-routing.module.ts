import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModificarEducacionComponent } from './modals/modificar-educacion/modificar-educacion.component';
import { ModificarExperienciaComponent } from './modals/modificar-experiencia/modificar-experiencia.component';
import { ModificarHardSkillsComponent } from './modals/modificar-hard-skills/modificar-hard-skills.component';
import { ModificarProyectosComponent } from './modals/modificar-proyectos/modificar-proyectos.component';
import { ModificarSoftSkillsComponent } from './modals/modificar-soft-skills/modificar-soft-skills.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  {path: 'about', component: AcercaDeComponent },
  {path: 'experienciaModal', component: ModificarExperienciaComponent},
  {path: 'experienciaModal/:id', component: ModificarExperienciaComponent},
  {path: 'educacionModal/:id', component: ModificarEducacionComponent},
  {path: 'skillModal/:id', component: ModificarHardSkillsComponent},
  {path: 'softSkillModal/:id', component: ModificarSoftSkillsComponent},
  {path: 'proyectoModal/:id', component: ModificarProyectosComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }