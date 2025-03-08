import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/shared/navbar/navbar.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { AddFormComponent } from "../../components/core/add-form/add-form.component";

@Component({
  selector: 'app-new-adition',
  imports: [NavbarComponent, FooterComponent, AddFormComponent],
  templateUrl: './new-addition.component.html',
  styleUrl: './new-addition.component.css'
})
export class NewAditionComponent {

}
