import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from 'src/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

   name:string="";
  alertwithSuccess() {
    Swal.fire({
      position: 'bottom',
      title: 'Your birthday message has been sent',
      confirmButtonText: 'Okay Thanks!',
      imageUrl: 'assets/MicrosoftTeams-image (1).png',
      imageWidth: 100,
      imageHeight: 100,
    });
  }

  public items: any = null;

  constructor(private service1: CartService) {

  }
  ngOnInit() {
    
  }
}
