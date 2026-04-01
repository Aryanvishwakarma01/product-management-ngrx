import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../store/product.model';
import { deleteProduct } from '../store/product.actions';
import { Store } from '@ngrx/store';
import { loadProducts } from '../store/product.actions';
import { selectProducts } from '../store/product.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
products$!: Observable<ProductType[]>
  deleteProduct(id: string) {
    this.store.dispatch(deleteProduct({ id }))
    alert("Product Deleted Successfully")
  }
  constructor(private store: Store<{ products: ProductType }>) { }

  ngOnInit() {
    this.store.dispatch(loadProducts())
    this.products$ = this.store.select(selectProducts)
    console.log(this.products$);

  }
}
