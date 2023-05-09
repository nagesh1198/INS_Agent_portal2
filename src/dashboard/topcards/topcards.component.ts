import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-topcards',
  templateUrl: './topcards.component.html',
  styleUrls: ['./topcards.component.css']
})
export class TopcardsComponent implements OnInit{
  newleadlist:any=[];
  renewallist:any=[];
  expirelist: any=[];
  rowvalue:any=0;
  renewalrowvalue:any=0;
  expirerowvalue:any=0;
 
constructor(private service:CartService){
 
   

}
  ngOnInit(): void {
  this.service.findAll2().subscribe(data=>{this.newleadlist=data;
    this.rowvalue=this.newleadlist.length;
    console.log(this.rowvalue)

  })
  this.service.find().subscribe(data=>{this.renewallist=data;
  this.renewalrowvalue=this.renewallist.length})

  this.service.find2().subscribe(data=>{this.expirelist=data;
    this.expirerowvalue=this.expirelist.length;
  })
  }
  


  

}
