import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/cart.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.css']
})
export class ExpiredComponent implements OnInit {
  rowvalue3:any=0
  expiredList:any=[]
  expiredList2:any=[]
   constructor(private service:CartService, private router:Router){

   }


   dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'insurance', 'contact', 'status', 'date'];

 

  ngOnInit(): void {
    this.service.find2().subscribe((response: any)=>{
      this.expiredList=response;
      this.expiredList2=response;
      this.dataSource = new MatTableDataSource(this.expiredList);
     })
  
  }

Onchange($event:any){
  
    let filtereddata =this.expiredList.filter((item:any) => item.insurance === $event.value);
    this.dataSource = new MatTableDataSource(filtereddata);
  }
  refresh(){
    this.service.find2().subscribe((response: any)=>{
      this.expiredList=response;})
    this.dataSource=new MatTableDataSource(this.expiredList) 
  }
 
}
