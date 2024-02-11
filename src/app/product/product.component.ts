import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FootbarComponent } from '../footbar/footbar.component';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SlicePipe,NavbarComponent,FootbarComponent,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
title ='products'
data: any=[];
constructor(public api:ApiService){}
ngOnInit(){
  this.api.getData().subscribe(response=>{this.data=response})
}
}
