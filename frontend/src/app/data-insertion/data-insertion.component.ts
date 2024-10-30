import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-insertion',
  templateUrl: './data-insertion.component.html',
  styleUrls: ['./data-insertion.component.css'],
  imports:[CommonModule, ReactiveFormsModule],
  standalone: true
})
export class DataInsertion {
  dataInsertionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dataInsertionForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      company: ['']
    });
  }

  onSubmit() {
    console.log('Os valores foram enviados:', this.dataInsertionForm.value);
  }

  getErrorMessage(controlName: string): string {
    const control = this.dataInsertionForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo é obrigatório.';
    }
    if (controlName === 'email' && control?.hasError('email')) {
      return 'Por favor, insira um e-mail válido.';
    }
    if (control?.hasError('minlength')) {
      return `Este campo deve ter pelo menos ${control.errors?.['minlength'].requiredLength} caracteres.`;
    }
    return '';
  }
}
