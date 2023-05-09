import { Component } from '@angular/core';

@Component({
  selector: 'app-healthinsurance',
  templateUrl: './healthinsurance.component.html',
  styleUrls: ['./healthinsurance.component.css']
})
export class HealthinsuranceComponent {
 show=false;
  clked=false;
  cancel=false;
comparedata=false
comparedata1=false;
  isClicked = false;
  onClick(){
    this.isClicked=true;
  }

  clisk(){
    this.clked=true;

  }

}
