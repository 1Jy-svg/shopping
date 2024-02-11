import { Component } from '@angular/core';
import { FootbarComponent } from "../footbar/footbar.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [FootbarComponent]
})
export class HomepageComponent {
    districts: any=[{
        id:1,
        title: '',
        text:'Upto 50% off',
        image:"https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_SY200_.jpg"
        
       
      },
      {
        id:2,
        title:'',
        text:'Upto 60% off',
        image:"https://m.media-amazon.com/images/I/517tM2o269L._AC_SY200_.jpg"
      },
      {
        id:3,
        title:'',
        text:'Upto 70% off',
        image:"https://m.media-amazon.com/images/I/51tmWG7u5cL._AC_SY200_.jpg"
      },
      {
        id:4,
        title:'',
        text:'Upto 54% off',
        image:"https://m.media-amazon.com/images/I/51Q8ZoVG3oL._AC_SY200_.jpg"
      },
      {
        id:5,
        title:'',
        text:'Upto 56% off',
        image:"https://m.media-amazon.com/images/I/416hvvDEp6L._AC_SY200_.jpg"
      },
      {
        id:6,
        title:'',
        text:'Upto 56% off',
        image:"https://m.media-amazon.com/images/I/31gAA759UCL._AC_SY200_.jpg"
      },
      {
        id:7,
        title:'',
        text:'Upto 26% off',
        image:"https://m.media-amazon.com/images/I/31sv3QmGsmL._AC_SY200_.jpg"
      },
      {
        id:8,
        title:'',
        text:'Upto 16% off',
        image:"https://m.media-amazon.com/images/I/41pBwisUb6L._AC_SY200_.jpg"
      },
      {
        id:9,
        title:'',
        text:'Upto 46% off',
        image:"https://m.media-amazon.com/images/I/61pHI30UcpL._SL1280_.jpg"
      },
      {
        id:11,
        title:'',
        text:'Upto 76% off',
        image:"https://m.media-amazon.com/images/I/41h5U0ROy6L._AC_SY200_.jpg"
      },]
}
