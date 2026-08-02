import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [
    RouterLink ,
    RouterOutlet
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
  standalone : true

})
export class Form {

}
