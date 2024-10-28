import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-insertion',
  
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen">
      <form [formGroup]="dataInsertionForm" (ngSubmit)="onSubmit()" class="w-full max-w-md">
        <div class="mb-4">
          <label for="type" class="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
          <select id="type" formControlName="type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="nome">Nome</option>
            <option value="email">Email</option>
            <option value="telefone">Telefone</option>
            <option value="cidade">Cidade</option>
            <option value="empresa">Empresa</option>
          </select>
          <div *ngIf="dataInsertionForm.get('type')?.invalid && dataInsertionForm.get('type')?.touched" class="text-red-500 text-xs italic">Por favor, selecione um tipo.</div>
        </div>
        
        <div class="mb-4">
          <label for="textInput" class="block text-gray-700 text-sm font-bold mb-2">Texto</label>
          <input
            id="textInput"
            type="text"
            formControlName="textInput"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Manda bala"
          />
          <div *ngIf="dataInsertionForm.get('textInput')?.invalid && dataInsertionForm.get('textInput')?.touched" class="text-red-500 text-xs italic">
            {{ getErrorMessage() }}
          </div>
        </div>
        
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" [disabled]="dataInsertionForm.invalid">
          Enviar
        </button>
      </form>
    </div>
  `,

standalone: true,
})
export class DataInsertion {
  dataInsertionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dataInsertionForm = this.fb.group({
      type: ['nome', Validators.required],
      textInput: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    console.log('Os valores foram enviados:', this.dataInsertionForm.value);
  }

  getErrorMessage() {
    if (this.dataInsertionForm.get('textInput')?.hasError('required')) {
      return 'Você deve preencher este campo.';
    }
    if (this.dataInsertionForm.get('textInput')?.hasError('minlength')) {
      return 'Este campo deve ter pelo menos 1 caractere.';
    }
    return '';
  }
}

