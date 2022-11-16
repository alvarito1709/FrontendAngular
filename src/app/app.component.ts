import { Component, Input } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendPortafolioWeb';
  modalSwitch: boolean = false;
  loginSwitch: boolean = false;

  constructor(private modal:ModalService){}

  ngOnInit(){
    this.modal.$modal.subscribe((valor => this.modalSwitch = valor));
    this.modal.$login.subscribe((valor => this.loginSwitch = valor));
  }


}
