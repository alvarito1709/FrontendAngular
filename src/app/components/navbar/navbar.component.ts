import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  redes: any;

  constructor(private modal: ModalService, private http:AcercaDeServiceService) { }

  ngOnInit(): void {
    this.http.getDatos().subscribe((datito =>{
      this.redes = datito.Redes;
    }))
  }
  showModal(){
    this.modal.$modal.emit(true)
  }
  showLogin(){
    this.modal.$login.emit(true)
  }

}
