import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from 'src/app/contact.model';
import { ContactsService } from 'src/app/contacts.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public readonly phoneTypes:string[] = Object.values(PhoneType);
  public name:FormControl = new FormControl('');

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
    this.name.setValue('Peter');
  }

  addContact(){
  }

  addNewPhoneToModel(){
  }

  addImage(event){
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      //save reader.result in form picture field
    }
  }

}
