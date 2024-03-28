import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Stavros',
    surName: 'Kyrz',
    age: 25,
    email: 'stav@aueb.gr'
  } 
}
