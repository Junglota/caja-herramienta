import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  apiUrl = 'http://universities.hipolabs.com/search?country=';
  universidad:string  = '';
  
  arrUni:any[] = [];

  constructor(private http: HttpClient) {}

  predict() {
    this.http.get<any>(`${this.apiUrl}${this.universidad}`).subscribe((response) => {
      this.arrUni = response;
      
      
    });
  }

  ngOnInit() {
  }

}
