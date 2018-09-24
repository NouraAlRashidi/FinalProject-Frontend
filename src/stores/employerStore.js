import React from "react";
import { decorate, observable, computed } from "mobx";


class EmployerStore {
  constructor() {
    this.employerEmail = "";
    this.employer = [];
    this.employerCompany = ""

  }


  setEmail(email){
    this.employerEmailemail = email
  }

  setCompany(company){
    this.employerCompany = company
  }

}
decorate(EmployerStore, {
  employerEmail: observable,
  employerCompany: observable,
  employer: observable,


});

export default new EmployerStore();
