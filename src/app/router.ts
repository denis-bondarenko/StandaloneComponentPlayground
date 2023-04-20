import { provideRouter } from '@angular/router';
import { EnvironmentProviders } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

export const routerProvider: EnvironmentProviders =  provideRouter([
  { path: '', component: ProductListComponent },
  {
    path: 'products/:productId',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (mod) => mod.ProductDetailsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((mod) => mod.CartComponent),
  },
  {
    path: 'shipping',
    loadComponent: () =>
      import('./shipping/shipping.component').then(
        (mod) => mod.ShippingComponent
      ),
  },
]);