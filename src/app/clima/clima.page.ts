import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  apiKey = '0b2588b8cacad54f3f5476b646b7d118';
  ciudad:string  = '';
  img:string  = '';
  status:string  = '';
  estadoClima:string  = '';
  result:any[]  = [];
  temp: any;

  ionViewDidEnter() {
    this.predict();
  }
  
  constructor(private http: HttpClient) {}
  predict() {
    this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad? this.ciudad:'santo%20domingo'}&units=metric&APPID=${this.apiKey}`).subscribe((response) => {
      this.ciudad = response.name;
      this.temp = parseInt(response.main.temp);

      switch (response.weather[0].main) {
        case 'Clear':
            this.img = "../assets/Iconos/clima/clear.png";
            this.status = 'Despejado';
            this.estadoClima = 'linear-gradient(to bottom, #6dd5ed, #2193b0)';
          break;
        case 'Clouds':
            this.img = "../assets/Iconos/clima/clouds.png";
            this.status = 'Nubes';
            this.estadoClima= 'linear-gradient(to bottom, #bdc3c7, #2c3e50)';

          break;
        case 'Rain':
            this.img = "../assets/Iconos/clima/rain.png";
            this.status = 'Lluvia';
            this.estadoClima='linear-gradient(to bottom, #4B79A1, #283E51)';
          break;
        case 'Snow':
            this.img = "../assets/Iconos/clima/snow.png";
            this.status = 'Nieve';
            this.estadoClima='linear-gradient(to bottom, #E6DADA, #274046)';
          break;
        case 'Haze':
            this.img = "../assets/Iconos/clima/haze.png";
            this.status = 'Bruma';
            this.estadoClima='linear-gradient(to bottom, #757F9A, #D7DDE8)';
          break;
        case 'Thunderstorm':
            this.img = "../assets/Iconos/clima/thunderstorm.png";
            this.status = 'Tomenta eléctrica';
            this.estadoClima='linear-gradient(to bottom, #232526, #414345)';
          break;
      
        default:
          break;
      }
    });
  }

  ngOnInit() {
  }

}
