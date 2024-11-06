import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataInsertion } from './data-insertion/data-insertion.component';
import { Home } from './home/home.component';
import { Thanks } from './thanks/thanks.component';
import { Collection } from './collection/collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataInsertion, Thanks, Home, Collection],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Data Collection';

  ngOnInit(): void {

  }
}