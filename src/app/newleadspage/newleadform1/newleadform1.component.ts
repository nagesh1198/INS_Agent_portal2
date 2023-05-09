import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-newleadform1',
  templateUrl: './newleadform1.component.html',
  styleUrls: ['./newleadform1.component.css']
})
export class Newleadform1Component {
 constructor(private _formBuilder: FormBuilder){

 }
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    isLinear = false;

  
  
  
  
 
  
  }
  
  
  
  
  

  

   
  
  
  

