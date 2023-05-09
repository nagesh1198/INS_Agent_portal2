import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-new-applicants',
  templateUrl: './new-applicants.component.html',
  styleUrls: ['./new-applicants.component.css']
})
export class NewApplicantsComponent implements OnInit{
  public productList:any=[];
 constructor(private Productservice:CartService){

 }
  ngOnInit():void {
   this.Productservice.findAll().subscribe((response: any)=>{
    this.productList=response;
   })
  }
}




