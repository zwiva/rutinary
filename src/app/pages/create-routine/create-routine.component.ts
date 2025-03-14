import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/shared/navbar/navbar.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { AddFormComponent } from "../../components/core/add-form/add-form.component";

@Component({
  selector: 'app-create-routine',
  imports: [NavbarComponent, FooterComponent, AddFormComponent],
  templateUrl: './create-routine.component.html',
  styleUrl: './create-routine.component.css'
})
export class CreateRoutineComponent {

}
