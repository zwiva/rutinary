import { Component } from '@angular/core';
import { ViewerComponent } from '../../components/core/viewer/viewer.component';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, ViewerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
