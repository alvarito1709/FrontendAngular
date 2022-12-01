import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  $modal = new EventEmitter<any>();
  $login = new EventEmitter<any>();
  $experiencia = new EventEmitter<any>();
  $educacion = new EventEmitter<any>();
}
