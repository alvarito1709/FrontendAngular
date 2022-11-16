import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( private modal: ModalService) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.modal.$modal.emit(false)
  }

}
