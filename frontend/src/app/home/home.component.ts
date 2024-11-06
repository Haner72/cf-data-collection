import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
  constructor(private navigationService: NavigationService) {}

  goToDataInsertion() {
    this.navigationService.navigateTo('/data-insertion');
  }

  goToCollection() {
    this.navigationService.navigateTo('/collection');
  }
}
