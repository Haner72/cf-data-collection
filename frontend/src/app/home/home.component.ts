import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class Home {
  password: string = '';
  
  constructor(private navigationService: NavigationService) {}

  goToDataInsertion() {
    this.navigationService.navigateTo('/data-insertion');
  }

  async goToCollection() {
    try {
      const response = await axios.post('http://localhost:8080/authenticate', 
        { password: this.password },  // Enviando a senha dentro de um objeto JSON
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
      if (response.status === 200) {
        this.navigationService.navigateTo('/collection');
      } else {
        alert('Senha incorreta!');
      }
    } catch (error) {
      alert('Falha na autenticação: senha incorreta');
      console.error(error);
    }
  }  
}