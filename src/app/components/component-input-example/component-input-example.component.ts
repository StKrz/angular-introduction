import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {

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
    };
}
