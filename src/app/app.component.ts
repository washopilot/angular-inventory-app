import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/balck-hat.jpg',
        ['Men', 'Accesories', 'Hats'],
        29.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Woman', 'Apparel', 'Jackets & Vest'],
        238.99
      ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/blue-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
