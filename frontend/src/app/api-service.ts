import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:8080/api";

  constructor() {}

  async getData() {
    try {
      const response = await axios.get(`${this.apiUrl}/data`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
  }

  async postData(data: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/data`, data);
      return response.data;
    } catch (error) {
      console.error('Deu errado ao enviar os dados: ', error);
      throw error;
    }
  }
}
