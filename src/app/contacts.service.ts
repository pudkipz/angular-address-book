import { Injectable } from '@angular/core';
import { Contact } from './contacts/contact';
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;

  // constructor() { }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find(c => c.id == id);
    return contact ? contact : null;
  }

  public addContact(contact: Contact): void {
    this.contacts.push({...contact, id: this.currentId++})
  }
}
