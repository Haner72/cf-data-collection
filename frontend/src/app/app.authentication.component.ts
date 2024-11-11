import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  password: string = '';
 
  async authenticate() {
    try {
      const response = await axios.post('http://localhost:8080/authenticate', this.password, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        alert('Autenticação bem-sucedida!');
      }
    } catch (error) {
      alert('Falha na autenticação: senha incorreta');
      console.error(error);
    }
  }
}
