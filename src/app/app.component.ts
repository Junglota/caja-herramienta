import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'hammer' },
    { title: 'Detector de genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'body' },
    { title: 'Info Universidad', url: '/universidades', icon: 'briefcase' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'information-circle' },
  ];
  
  constructor() {}
}
