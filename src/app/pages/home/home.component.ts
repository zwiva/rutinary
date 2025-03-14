import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
