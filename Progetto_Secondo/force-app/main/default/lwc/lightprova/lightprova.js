import { LightningElement, track, wire } from 'lwc';
import createOpp from '@salesforce/apex/CreateOpportunity.createOpp';
import retrieveOpps from '@salesforce/apex/CreateOpportunity.retrieveOpps';

export default class Lightprova extends LightningElement {
  @wire(retrieveOpps)
  oppsInDatabase;

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
    createOpp({
      name: this.opportunityFields.name,
      close: this.opportunityFields.closeDate,
      stage: this.opportunityFields.stage
    })
    .then(result => {
      console.log(result);
      this.isDataVisible = true;
    })
    .catch(e => console.error(e));
    //this.isDataVisible = !this.isDataVisible;
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