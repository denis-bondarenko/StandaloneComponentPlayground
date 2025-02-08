import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
    imports: [RouterModule],
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  
  constructor(private _cartService: CartService) {
    this.cartService = _cartService;
  }

  cartService: CartService;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
