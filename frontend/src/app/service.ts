import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class Service {
    private apiUrl= "http://localhost8080/api";
    constructor(private http: HttpClient) { }


  dizOiCaroline(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text'});
  }
}
