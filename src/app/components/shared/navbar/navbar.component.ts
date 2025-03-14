import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule], // para usar ngfor
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  enlaces: any[] = [
    {
      nombre: 'home',
      url: '/home'
    },
    {
      nombre: 'crear',
      url: '/create-routine'
    },
    {
      nombre: 'último',
      url: '/last-used'
    },
  ]
}
