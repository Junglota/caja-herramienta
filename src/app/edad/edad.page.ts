import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  edadUrl = 'https://api.agify.io/';
  generoUrl = 'https://api.genderize.io/';
  name:string  = '';
  result:string  = '';
  img:string = ''

  constructor(private http: HttpClient) {}

  predict() {
    this.http.get<any>(`${this.generoUrl}?name=${this.name}`).subscribe((rGenero) => {
      this.http.get<any>(`${this.edadUrl}?name=${this.name}`).subscribe((rEdad) => {
          switch (true) {
//--------------------------------------------Chico-----------------------
            case (rEdad.age < 5 && rGenero.gender=='male'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/mBebe.png';
              break;
            case (rEdad.age < 13 && rGenero.gender=='male'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/mNiño.png';
              break;
            case (rEdad.age < 20 && rGenero.gender=='male'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/mAdol.png';
              break;
            case (rEdad.age < 30 && rGenero.gender=='male'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/mJoven.png';
              break;
            case (rEdad.age < 70 && rGenero.gender=='male'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/mAdulto.png';
              break;
            case (rEdad.age < 100 && rGenero.gender=='male'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/mViejo.png';
              break;
 //----------------------------------Chica----------------------------------------------             
            case (rEdad.age < 5 && rGenero.gender=='female'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/fBebe.png';
              break;
            case (rEdad.age < 13 && rGenero.gender=='female'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/fNiña.png';
              break;
            case (rEdad.age < 20 && rGenero.gender=='female'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/fAdol.png';
              break;
            case (rEdad.age < 30 && rGenero.gender=='female'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/fJoven.png';
              break;
            case (rEdad.age < 60 && rGenero.gender=='female'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/fAdulto.png';
              break;
            case (rEdad.age < 100 && rGenero.gender=='female'):
              this.result = `La edad de ${this.name} es :${rEdad.age}`;
              this.img = '../assets/Iconos/edad/fVieja.png';
              break;
          
            default:
              break;
          }
      });
    });
  }

  ngOnInit() {
  }

}
