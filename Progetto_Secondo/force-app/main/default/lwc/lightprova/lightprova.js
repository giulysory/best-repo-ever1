import { LightningElement } from 'lwc';

export default class Lightprova extends LightningElement {
  stage;  
  options = [
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

  handleStageChange(e) {
    this.stage = e.target.value;
    console.log(this.stage);
  }
}