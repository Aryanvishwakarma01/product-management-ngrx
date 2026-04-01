import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deleteProduct } from '../store/product.actions';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // apiUrl = "https://dummyjson.com/products"
  // apiUrl = "http://localhost:3000/products"
  apiUrl = "https://i4e26nxcqb.execute-api.eu-north-1.amazonaws.com/products"


  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get(this.apiUrl)
  }

  addProduct(product: any){
    return this.http.post(this.apiUrl, product)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
