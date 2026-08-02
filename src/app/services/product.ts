import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = 'http://localhost:8080/api/v1/products/' ;

  constructor(private http : HttpClient){
    this.getAllProducts();
  }

  getAllProducts(){
    return this.http.get(this.api + '/all');
  }
  
  deleteProduct(product : any){
    
  }

  
}
