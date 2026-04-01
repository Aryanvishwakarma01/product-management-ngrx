import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductForm } from './product-form/product-form';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
  { path: '', component: ProductForm },
  { path: 'add-product', component: ProductForm },
  { path: 'show-products', component: ProductList }
];