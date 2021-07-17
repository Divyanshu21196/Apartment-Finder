import { Injectable } from '@angular/core';
import {Apartments} from '../component/myworld';

@Injectable({
  providedIn: 'root'
})
export class DataApartmentService {

  arrApartments=[];
  constructor() { }

  getApartmentData(){
    this.arrApartments = Apartments;
    return this.arrApartments;
  }
}
