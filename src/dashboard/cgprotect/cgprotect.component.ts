import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CartService } from 'src/cart.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-cgprotect',
  templateUrl: './cgprotect.component.html',
  styleUrls: ['./cgprotect.component.css']
})
export class CgprotectComponent implements OnInit {


  @ViewChild('sidenav')
 sidenav!: MatSidenav;



 reason = '';



 close(reason: string) {
 this.reason = reason;
 this.sidenav.close();
 }
  cgprotectList:any=[];
 constructor( private service:CartService){

 }
 formatLabel(value: number): string {

 if (value >= 1) {
  
 return Math.round(value / 1) + 'yr';
  
 }
  
 return `${value}`;
  
 }

  ngOnInit(): void {

    this.service.cgprotectList().subscribe((response:any)=>{
    
    this.cgprotectList=response;
    
    })

}


}
