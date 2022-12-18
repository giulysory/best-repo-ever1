import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/ContactCreator.createContact';

export default class NewContactForm extends LightningElement {
  name;
  lastName;
  phone;

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleLastNameChange(event) {
    this.lastName = event.target.value;
  }

  handlePhoneChange(event) {
    this.phone = event.target.value;
  }

  handleSubmit() {
    createContact(name, lastName, phone)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  }
}