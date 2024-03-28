import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Stavros';

  person = {
    givenName: 'Stavors',
    surName: 'Kyriaz',
    age: 25,
    email: 'stav@aueb.gr'
  } 
}
