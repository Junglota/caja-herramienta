import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  apiUrl = 'https://api.genderize.io/';
  apiKey = '0b2588b8cacad54f3f5476b646b7d118';
  ciudad:string  = '';
  result:any[]  = [];
  colorFondo:string = '#6C7B8B';

  ionViewDidEnter() {
    this.predict();
  }
  
  constructor(private http: HttpClient) {}
  predict() {
    this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad? this.ciudad:'santo%20domingo'}&units=metric&APPID=${this.apiKey}`).subscribe((response) => {
      this.result = response.name;
    });
  }

  ngOnInit() {
  }

}
