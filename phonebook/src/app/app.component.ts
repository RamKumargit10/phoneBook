import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'phonebook';
  search: string
  add: boolean = false
  contactDetails: contactDetails[] = []
  name: string;
  number: number
  ngOnInit() {
    localStorage.setItem('contact', JSON.stringify(this.contactDetails));
  }

  addContact() {
    this.add = true
  }
  save() {
    this.add = false;
    this.contactDetails.push({ name: this.name, number: this.number });
    localStorage.setItem('contact', JSON.stringify(this.contactDetails));
    this.number = +91;
    this.name = '';
  }
  sort() {
    this.contactDetails = _.sortBy(this.contactDetails, 'name')
  }
  sort2() {
    this.contactDetails = _.reverse(_.sortBy(this.contactDetails, 'name'))
  }
  delete(i) {
    this.contactDetails.splice(i, 1)
    localStorage.setItem('contact', JSON.stringify(this.contactDetails))
  }
}
class contactDetails {
  name: string;
  number: number;
}
