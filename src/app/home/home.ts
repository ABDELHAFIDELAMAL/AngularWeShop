import { Component } from '@angular/core';
import { ProductService } from '../services/product';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone : true
})
export class Home {

  constructor(private productService : ProductService){
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts();
  }

  delete(product : any){
    let value = confirm('Etes vous sur de vouloir supprimer?')
    if ( value == true ){
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }

  
}
