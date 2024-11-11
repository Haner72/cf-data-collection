import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../navigation.service';
import axios from 'axios';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class Collection implements OnInit {
  clients: any[] = [];

  constructor(private navigationService: NavigationService) {}
  
  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:8080/users');
      this.clients = response.data;
    } catch (error) {
      console.error('Não foi possível carregar a lista de clientes:', error);
    }
  }

  goToHome() {
    this.navigationService.navigateTo('/home');
  }

  async deleteClient(client: any) {
    try {
      await axios.delete(`http://localhost:8080/users/${client.id}`);
      this.clients = this.clients.filter(c => c.id !== client.id);
    } catch (error) {
      console.error('Não foi possível apagar o cliente:', error);
    }
  }
  

}
