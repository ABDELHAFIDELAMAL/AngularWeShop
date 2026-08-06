import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule , RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone : true
})
export class HomeComponent {
  products : any = [];

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

  getProductById(id : number){
    this.productService.getProductById(id);
  }

  update(product : any , id : number){
    this.productService.updateProduct(product);
    this.getAllProducts();
  }

}
