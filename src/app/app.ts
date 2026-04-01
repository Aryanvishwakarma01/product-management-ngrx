import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from './services/product-service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductType } from './store/product.model';
import { loadProducts, addProduct, deleteProduct } from './store/product.actions';
import { selectProducts } from './store/product.selector';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule,AsyncPipe, ReactiveFormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice1');
  products$!: Observable<ProductType[]>
  
  
  productForm = new FormGroup({
  id: new FormControl('0', { nonNullable: true }),
  title: new FormControl('', { nonNullable: true, validators: [Validators.minLength(3)] }),
  price: new FormControl(0, { nonNullable: true, validators:[Validators.min(1)] })
});

  formHandler(){
    if(this.productForm.valid){
      const product = this.productForm.getRawValue();
      this.store.dispatch(addProduct({product}))
      alert("Product Added Successfully")
      window.location.reload()
      this.productForm.reset()
      console.log(product)
    }
  }

  deleteProduct(id: string){
    this.store.dispatch(deleteProduct({id}))
    alert("Product Deleted Successfully")
  }
  constructor(private store: Store<{products: ProductType }>){}

  ngOnInit(){
    this.store.dispatch(loadProducts())
    this.products$ = this.store.select(selectProducts)
    console.log(this.products$);
    
  }
 
}
