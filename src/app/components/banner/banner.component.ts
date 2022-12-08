import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { AcercaDeServiceService } from '../serviceAcercaDe/acerca-de-service.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  info: any;

  constructor(private data: AcercaDeServiceService, private modal: ModalService) { }

  ngOnInit(): void {
    this.data.getDatos().subscribe((datos=>{
      return this.info = datos.Informacion;
     }))
  }
  modificarInfo(){
    
    this.modal.$info.emit(true);

  }

}
