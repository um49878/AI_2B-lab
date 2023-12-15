import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';
  constructor() { }

  public getAll(): Person[]{
    let people: Person[] = [];
    let storedData = localStorage.getItem(this.KEY);

    if (storedData) {
      people = JSON.parse(storedData) as Person[];
    }
    return people
  }

  public getPerson(index: number): Person | undefined {

   const people = this.getAll();

   if (index >= 0 && index < people.length) {
      return people[index];    }

    return undefined;
}
  public addPerson(person: Person): void {
    const people = this.getAll();

    people.push(person);

    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {
    const people = this.getAll();

    if (index >= 0 && index < people.length) {
      people.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(people));
    }
  }
}
