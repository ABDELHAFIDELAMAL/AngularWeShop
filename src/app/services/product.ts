import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = 'http://localhost:8080/api/v1/products/' ;
  products : any = [];

  constructor(private http : HttpClient){
    this.products = this.getAllProducts();
  }

  getAllProducts(){
    return this.http.get(this.api + '/all');
  }
  
  getProductById(id : number){
    return this.http.get(this.api + '/get/' + id);
  }
  deleteProduct(product : any){
    return this.http.delete(this.api + '/delete/' + product.id);
  }

  addProduct(product : any){
    return this.http.post(this.api + '/add', product);
  } 
  updateProduct(product : any){
    return this.http.put(this.api + '/update/' + product.id, product);
  }
  
}
