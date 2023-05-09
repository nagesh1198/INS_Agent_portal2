import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-applicationdetails',
  templateUrl: './applicationdetails.component.html',
  styleUrls: ['./applicationdetails.component.css']
})
export class ApplicationdetailsComponent implements OnInit{
  
data:any;
 
constructor(private route:ActivatedRoute){

}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {

       this.data = JSON.parse(params['data']);
       // or display the data in the template
      
      
     });

  }

}
