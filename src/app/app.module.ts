import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FotoDePerfilComponent } from './components/foto-de-perfil/foto-de-perfil.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillsComponent } from './components/skills/skills.component'
import { LoginComponent } from './components/login/login.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ModificarExperienciaComponent } from './modals/modificar-experiencia/modificar-experiencia.component';
import { ModificarEducacionComponent } from './modals/modificar-educacion/modificar-educacion.component';
import { ModificarHardSkillsComponent } from './modals/modificar-hard-skills/modificar-hard-skills.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeComponent,
    FotoDePerfilComponent,
    FooterComponent,
    ContactoComponent,
    SkillsComponent,
    LoginComponent,
    LanguagesComponent,
    InicioComponent,
    Error404Component,
    ProyectosComponent,
    ModificarExperienciaComponent,
    ModificarEducacionComponent,
    ModificarHardSkillsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
