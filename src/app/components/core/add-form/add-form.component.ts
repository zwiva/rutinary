import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit {

  routine = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]), // Campo de email con validación
    duration: new FormControl('', [Validators.required, Validators.minLength(1)]), // Campo de password con validación
  });

  ngOnInit() {
    console.log('this.routine vacio ->', this.routine);
  }

  onSubmit() {

    console.log('this.routine con data ->', this.routine);

    if (this.routine.valid) {
      console.log('Formulario válido:', this.routine.value);
      this.routine.reset(); // limpiar
    } else {
      console.log('Formulario inválido');
    }
  }

}