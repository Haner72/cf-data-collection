import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataInsertion } from './data-insertion/data-insertion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataInsertion],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Data Collection';

  ngOnInit(): void {

  }
}