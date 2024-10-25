import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Service } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Data Collection';
  message: string = '';

  constructor(private Service: Service) { }

  ngOnInit(): void {
      this.Service.dizOiCaroline().subscribe((data: string) => {
        this.message = data;
      });
  }
}
