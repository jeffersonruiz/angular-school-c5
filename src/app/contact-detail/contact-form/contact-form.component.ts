import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact.model';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public model: Contact = new Contact(0, '');

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
  }

  addContact() {
    this.contactService.addContact(this.model);
    this.model = new Contact(0, '');
  }

}
