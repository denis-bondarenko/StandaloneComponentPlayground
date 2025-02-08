import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
    imports: [CommonModule, RouterModule],
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  items = this.cartService.getItems();
}
