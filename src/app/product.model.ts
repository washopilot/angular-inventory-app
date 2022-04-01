/*
 * Provides a 'Product' object
 */

export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public departament: string[],
    public price: number
  ) {}
}
