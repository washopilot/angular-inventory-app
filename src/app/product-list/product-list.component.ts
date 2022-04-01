import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: Product[] = [];
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter();
    console.log('inicial del evento', this.onProductSelected);
  }

  clicked(product: Product) {
    this.onProductSelected.emit(product);
    console.log('click on ', product);
    console.log('evento ', this.onProductSelected);
  }
}
