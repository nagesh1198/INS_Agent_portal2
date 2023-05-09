import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-newleads',
  templateUrl: './newleads.component.html',
  styleUrls: ['./newleads.component.css']
})
export class NewleadsComponent implements OnInit {
  rowcount:any=0;
  newLeadsList:any=[];
  constructor(private service2:CartService){

  }
  
  ngOnInit(): void {
    this.service2.findAll2().subscribe((response: any)=>{
      this.newLeadsList=response;
     })
    
  }

}

@Directive({

  selector: '[appClickableTableRow]'})
   

export class ClickableTableRowDirective {
   
  @Input() data: any;
   
  @Input() href!: string;
   
  constructor(private el: ElementRef) {}
   
   
   
   
  @HostListener('click') onClick() {
   
   const href = this.el.nativeElement.getAttribute('data-href');
   
   if (href) {
   
  const queryParams = this.data ? `?data=${JSON.stringify(this.data)}` : '';
   
  window.location.href = `${href}${queryParams}`;
   
   }
   
  }
}