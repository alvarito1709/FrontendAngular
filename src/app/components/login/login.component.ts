import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modal:ModalService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.$login.emit(false)
  }

}
