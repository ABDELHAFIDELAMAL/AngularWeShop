import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',

  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {}
