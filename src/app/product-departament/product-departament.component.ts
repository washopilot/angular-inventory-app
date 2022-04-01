import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-departament.component.html',
  styles: []
})
export class ProductDepartamentComponent {
  @Input() product!: Product;
  constructor() {}
}
