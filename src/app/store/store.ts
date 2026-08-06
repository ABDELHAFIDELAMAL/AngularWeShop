import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  description: string;
  images: string[];
  category: { id: number; name: string };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class StoreComponent {
  searchQuery: string = '';
  selectedCategory: string = 'All';
  
  cart: CartItem[] = [];
  isCartOpen: boolean = false;

  products = {
    message: "Products retrieved successfully!",
    data: [
      {
        brand: "phones2026",
        category: { id: 1, name: "Electronics" },
        description: "phone from apple",
        id: 1,
        images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop"],
        name: "iPhone 17 pro max",
        price: 1299.99,
        quantity: 10
      },
      {
        brand: "phones2026",
        category: { id: 2, name: "Electronics" },
        description: "phone from samsung",
        id: 2,
        images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop"],
        name: "Samsung S26 ULTRA",
        price: 1199.99,
        quantity: 13
      },
      {
        brand: "phones2026",
        category: { id: 3, name: "Electronics" },
        description: "phone from redmagic",
        id: 3,
        images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop"],
        name: "Redmagic 11",
        price: 899.99,
        quantity: 0
      },
      {
        brand: "skincafe25",
        category: { id: 4, name: "SkineCare" },
        description: "skinecare for women",
        id: 4,
        images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop"],
        name: "Mio Skincare",
        price: 29.99,
        quantity: 30
      }
    ]
  };

  addToCart(product: Product): void {
    if (product.quantity <= 0) return;

    const existingItem = this.cart.find(item => item.product.id === product.id);

    if (existingItem) {
      if (product.quantity > 0) {
        existingItem.quantity++;
        product.quantity--;
      }
    } else {
      this.cart.push({ product: product, quantity: 1 });
      product.quantity--;
    }
  }

  increaseQuantity(item: CartItem): void {
    if (item.product.quantity > 0) {
      item.quantity++;
      item.product.quantity--;
    }
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      item.product.quantity++;
    } else {
      this.removeFromCart(item);
    }
  }

  removeFromCart(item: CartItem): void {
    item.product.quantity += item.quantity;
    this.cart = this.cart.filter(c => c.product.id !== item.product.id);
  }

  get totalCartPrice(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  get cartTotalCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  toggleCartModal(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  get filteredProducts(): Product[] {
    return this.products.data.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || product.category.name === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  get categories(): string[] {
    const categoryNames = this.products.data.map(p => p.category.name);
    return ['All', ...new Set(categoryNames)];
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}