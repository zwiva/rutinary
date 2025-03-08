import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/shared/navbar/navbar.component";
import { ViewerComponent } from "../../components/core/viewer/viewer.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";

@Component({
  selector: 'app-lastview',
  imports: [NavbarComponent, ViewerComponent, FooterComponent],
  templateUrl: './last-view.component.html',
  styleUrl: './last-view.component.css'
})
export class LastviewComponent {

}
