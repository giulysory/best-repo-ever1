import { LightningElement } from 'lwc';

export default class Lightprova extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
      this.greeting = event.target.value;
    }
}