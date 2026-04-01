import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductForm } from "../product-form/product-form";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
