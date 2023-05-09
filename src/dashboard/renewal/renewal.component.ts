import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css'],
})
export class RenewalComponent implements OnInit {
  public rowcount: any = 0;
  renewalList: any = [];

  // @Output() rowCountChanged = new EventEmitter<number>();
  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.service.find().subscribe((response: any) => {
      this.renewalList = response;
    });
  }
}

@Directive({
  selector: '[appClickableTableRow]',
})
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
