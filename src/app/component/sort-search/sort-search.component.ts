import { Component, OnInit } from '@angular/core';
import {Apartments} from '../myworld';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-sort-search',
  templateUrl: './sort-search.component.html',
  styleUrls: ['./sort-search.component.css']
})
export class SortSearchComponent implements OnInit {
  settings = {
    mode: 'external',
    actions: {
      columnTitle:"Details/Delete",
      position: 'right', // left|right
      edit:false,
      delete:false,
      add:false
    },  
    columns: {

      name: {
        title: 'Name',
        type: 'string',
        filter:false,
      },

      buildingName: {
        title: 'Building Name',
        type: 'string',
        filter:false,
      },

      towerName: {
        title: 'Tower Name',
        type: 'string',
        filter:false,
      },


      configName: {
        title: 'Configuration',
        type: 'string',
        filter:false,
      },

      noOfBedrooms:{
        title: 'Number of Bedrooms',
        type: 'string',
        filter:false,
      },

      noOfBathroom:{
        title: 'Number Of Bathrooms',
        type: 'string',
        filter:false,
      },

      noOfHalfBath:{
      title: 'Nummber Of Half-Bath',
      type: 'string',
      filter:false,
     },

     price:{
        title: 'Price',
        type: 'string',
        filter:false,
      },    

    },
  };

  source: LocalDataSource = new LocalDataSource();
  finalArr=[];
  search:string;

  constructor() { }

  ngOnInit(): void {
    this.makeListData();
  }

  onKeyUpSearch(query){
    if(query){
      this.source.setFilter([
        {
          field: 'name',
          search: query
        },
        {
          field: 'buildingName',
          search: query
        },
        {
          field: 'towerName',
          search: query
        },
        {
          field: 'configName',
          search: query
        }
      ], false);
  
    }else{
      this.makeListData();
    }
  }

  onKeyUpPrice(price){
    if(price){
      console.log(price);
      let data = this.finalArr.filter(e=>e.price > parseInt(price));
       // console.log(this.finalArr);
       this.source.load(data);
    }else{
      return;
    }
  }

  makeListData(){
    for(let i= 0 ; i<Apartments.length; i++){
      for(let j=0;j<Apartments[i].buildings.length;j++)
        for(let k=0;k<Apartments[i].buildings[j].property.length;k++){
          let obj = {'name':Apartments[i].buildings[j].property[k].name,'buildingName':Apartments[i].buildings[j].name,'towerName':Apartments[i].name,'configName':Apartments[i].buildings[j].property[k].configName,'noOfBedrooms':Apartments[i].buildings[j].property[k].numberOfBedrooms,'noOfBathroom':Apartments[i].buildings[j].property[k].numberOfBathrooms,'noOfHalfBath':Apartments[i].buildings[j].property[k].numberOfhalfBahrooms,'price':Apartments[i].buildings[j].property[k].minPrice};
          this.finalArr.push(obj);
        }
    }
    this.source.load(this.finalArr);
    // console.log(data);
  
  }

}
