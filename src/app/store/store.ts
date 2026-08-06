import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-store',
  imports: [
    CommonModule , RouterOutlet , RouterLink , RouterLinkActive
  ],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class StoreComponent {
  products = {
  "message": "Products retrieved successfully!",
  "data": [
    {
      "brand": "phones2026",
      "category": {
        "id": 1,
        "name": "Electronics"
      },
      "description": "phone from apple",
      "id": 1,
      "images": [],
      "name": "iPhone 17 pro max",
      "price": 49.99,
      "quantity": 10
    },
    {
      "brand": "phones2026",
      "category": {
        "id": 2,
        "name": "Electronics"
      },
      "description": "phone from samsung",
      "id": 2,
      "images": [],
      "name": "Samsung S26 ULTRA",
      "price": 59.99,
      "quantity": 13
    },
    {
      "brand": "phones2026",
      "category": {
        "id": 3,
        "name": "Electronics"
      },
      "description": "phone from redmagic",
      "id": 3,
      "images": [],
      "name": "Redmagic 11",
      "price": 59.99,
      "quantity": 3
    },
    {
      "brand": "skincafe25",
      "category": {
        "id": 4,
        "name": "SkineCare"
      },
      "description": "skinecare for women",
      "id": 4,
      "images": [],
      "name": "mio",
      "price": 9.99,
      "quantity": 30
    }
  ]
}

}
