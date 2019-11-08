import { Component } from '@angular/core';

import { PersonService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personsService: PersonService) {}

  onCreatePerson() {
    console.log('Created Person: ' + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
