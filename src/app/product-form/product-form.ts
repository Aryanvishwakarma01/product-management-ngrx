import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductType } from '../store/product.model';
import { addProduct } from '../store/product.actions';
@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  constructor(private store: Store<{ products: ProductType }>) { }
  productForm = new FormGroup({
    id: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.minLength(3)] }),
    price: new FormControl(0, { nonNullable: true, validators: [Validators.min(1)] })
  });

  formHandler() {
    if (this.productForm.valid) {
      const formValue = this.productForm.getRawValue();
      const product = {
        ...formValue,
        id: Date.now().toString() // ✅ generate unique id here
      };
      this.store.dispatch(addProduct({ product }))
      alert("Product Added Successfully")
      window.location.reload()
      this.productForm.reset()
      console.log(product)
    }
  }
}
