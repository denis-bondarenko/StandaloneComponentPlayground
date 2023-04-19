import { CommonModule } from '@angular/common';
//import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

@Component({
  standalone: true,
  //imports: [NgFor, AsyncPipe, CurrencyPipe],  // not sure what's the best way to inject whole module or directives only
  imports: [CommonModule],
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private _cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this._cartService.getShippingPrices();
  }
}
