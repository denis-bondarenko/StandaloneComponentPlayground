import { AsyncPipe, CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

@Component({
  standalone: true,
  //imports: [NgFor, AsyncPipe, CurrencyPipe],
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
