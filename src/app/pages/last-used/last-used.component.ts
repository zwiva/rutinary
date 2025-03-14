import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/shared/navbar/navbar.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";

@Component({
  selector: 'app-last-used',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './last-used.component.html',
  styleUrl: './last-used.component.css'
})
export class LastUsedComponent {

}
