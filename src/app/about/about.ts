import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

}