import { LightningElement, track } from 'lwc';
import createOpp from '@salesforce/apex/CreateOpportunity.createOpp';
import retrieveOpp from '@salesforce/apex/CreateOpportunity.retrieveOpp';

export default class Lightprova extends LightningElement {
  isDataVisible = false;
  get options() {
    return [
      {value: null, label: "--None--"},
      {value: "Prospecting", label: "Prospecting"},
      {value: "Qualification", label: "Qualification"},
      {value: "Needs Analysis", label: "Needs Analysis"},
      {value: "Value Proposition", label: "Value Proposition"},
      {value: "Id. Decision Makers", label: "Id. Decision Makers"},
      {value: "Perception Analysis", label: "Perception Analysis"},
      {value: "Proposal/Price Quote", label: "Proposal/Price Quote"},
      {value: "Negotiation/Review", label: "Negotiation/Review"},
      {value: "Closed Won", label: "Closed Lost"}
    ];
  } 

  @track
  opportunityFields = {
    name: "",
    closeDate: new Date(),
    stage: this.options[0].value
  };  

  handleClick() {
    this.isDataVisible = !this.isDataVisible;
  }

  handleNameChange(e) {
    this.opportunityFields = {...this.opportunityFields, name: e.target.value};
  }

  handleDateChange(e) {
    this.opportunityFields = {...this.opportunityFields, closeDate: e.target.value};
  }

  handleStageChange(e) {
    this.opportunityFields = {...this.opportunityFields, stage: e.detail.value};
  }
}