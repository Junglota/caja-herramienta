import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Detector de genero', url: '/genero', icon: 'paper-plane' },
    { title: 'Edad', url: '/edad', icon: 'heart' },
    { title: 'Info Universidad', url: '/universidades', icon: 'archive' },
    { title: 'Clima', url: '/clima', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
