import { Component, OnInit } from '@angular/core';




import { ActivatedRoute } from '@angular/router';




import { CartService } from 'src/cart.service';




@Component({




selector: 'app-policycovered',




templateUrl: './policycovered.component.html',




styleUrls: ['./policycovered.component.css']




})




export class PolicycoveredComponent implements OnInit {







data: any;




public PolicyList:any=[];









constructor(private route:ActivatedRoute,private policyService:CartService) { }







ngOnInit(): void {




 this.policyService.policyList().subscribe((response:any)=>{this.PolicyList=response;})




 this.route.queryParams.subscribe(params => {




 this.data = JSON.parse(params['data']);




 console.log(this.data); // or display the data in the template




 });




}




}