import {Component, OnInit} from '@angular/core';
import{Person} from "../person";
import {Router} from "@angular/router";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit{
  person: Person = {
    lastAddress: {}
  };

  constructor(private router: Router, private personLsService: PersonLsService,) {}

  savePerson(): void{
    this.personLsService.addPerson(this.person);
    this.router.navigate(['/list']);
  }

  ngOnInit() {
  }
}

