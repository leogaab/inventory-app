import { Component } from '@angular/core';
import { Product } from './components/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // products: Product[];
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jacket & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A nice black hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accesories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked ', product);
  }

}
