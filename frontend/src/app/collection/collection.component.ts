import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  
  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:8080/users');
      this.clients = response.data;
    } catch (error) {
      console.error('Não foi possível carregar a lista de clientes:', error);
    }
  }
}
