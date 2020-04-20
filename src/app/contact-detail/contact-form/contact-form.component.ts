import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from 'src/app/contact.model';
import { ContactsService } from 'src/app/contacts.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public model: Contact = new Contact(0, '', 'assets/default-user.png', []);
  public readonly phoneTypes: string[] = Object.values(PhoneType);

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  addContact() {
    this.contactsService.addContact(this.model);
    this.model = new Contact(0, '', 'assets/default-user.png', []);
  }

  addNewPhoneToModel() {
    this.model.phones.push({type: null, number: null});
  }

  addImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      this.model.picture =  reader.result as string;
    };
  }

}
