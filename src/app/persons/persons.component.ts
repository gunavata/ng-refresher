import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;
  // private personService: PersonService;

  constructor(private prsService: PersonService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
