import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Steve';

  person0 = {
    givenName: 'Steve',
    surName: 'Krz',
    age: 25,
    email: 'stav@aueb.gr',
    address: 'Patision'
  };

  person1 = {
      givenName: 'John',
      surName: 'James',
      age: 39,
      email: 'john@aueb.gr',
      address: 'New York, USA'
    } 
}
