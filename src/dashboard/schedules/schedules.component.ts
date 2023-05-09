import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
  providers: [DatePipe],
})
export class SchedulesComponent implements OnInit {
  data: any = null;
  dates: Date[] = [];
  days: Date[] = [];
  startDate: Date = new Date();
  dateofstring: any = [];
  @Input() selectedDate: Date;
  selectedDateString: string;
  constructor(private service: CartService, private datepipe: DatePipe) {
    this.selectedDate = new Date();
    this.selectedDateString =
      this.datepipe.transform(this.selectedDate, 'yyyy-MM-dd') ?? '';
  }
  ngOnInit(): void {
    this.updateDates();
  }
  updateDates() {
    console.log('updateDates() called');

    this.startDate = this.selectedDate
      ? new Date(this.selectedDate)
      : new Date();

    const startDate = new Date(this.startDate);

    startDate.setDate(this.startDate.getDate());

    this.dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);

      date.setDate(startDate.getDate() + i);

      this.dates.push(date);
    }
  }

  updateSelectedDate() {
    this.selectedDate = new Date(this.selectedDateString);
  }
}
