import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  
  apiUrl = 'https://api.genderize.io/';
  name:string  = '';
  result:string  = '';
  img: string = '';
  

  constructor(private http: HttpClient) {}

  predict() {
    this.http.get<any>(`${this.apiUrl}?name=${this.name}`).subscribe((response) => {
      switch (response.gender) {
        case 'male':
          this.img = '../assets/Iconos/genero/male.png'
          this.result = 'Varon';
          break;
        case 'female':
          this.img = '../assets/Iconos/genero/female.png'
          this.result = 'Hembra';
          break;
      
        default:
          break;
      }
      
    });
  }
  ngOnInit() {
  }

}
