import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css'],
})
export class ViewallComponent implements OnInit {
  list: any = [];

  constructor(private service: CartService, private el: ElementRef) {}
  ngOnInit(): void {
    this.service.findAll1().subscribe((data) => {
      this.list = data;
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
