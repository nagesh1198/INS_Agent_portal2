import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newleadsrowclik',
  templateUrl: './newleadsrowclik.component.html',
  styleUrls: ['./newleadsrowclik.component.css']
})
export class NewleadsrowclikComponent implements OnInit {
  data:any=''
constructor(private route:ActivatedRoute){

}
   
  ngOnInit() {
  this.route.queryParams.subscribe(params => {

       this.data = JSON.parse(params['data']);
       // or display the data in the template
      
      
     });

  }

}
