import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { ProductForm } from '../product-form/product-form';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [ RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
