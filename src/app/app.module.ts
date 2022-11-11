import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FotoDePerfilComponent } from './components/foto-de-perfil/foto-de-perfil.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AppRoutingModule } from './app-routing.module';


const appRoutes: Routes = [
{path: '', component: AppComponent},
{path: 'contacto', component: ContactoComponent}
]

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
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
