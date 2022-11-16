import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }
  showModal(){
    this.modal.$modal.emit(true)
  }
  showLogin(){
    this.modal.$login.emit(true)
  }

}
