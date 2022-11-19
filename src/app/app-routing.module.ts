import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  {path: 'about', component: AcercaDeComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }