import React from "react";
import { decorate, observable, computed } from "mobx";


class CandidateStore {
  constructor() {
    this.candidateEmail = "";
    this.candidates = [];

  }



  setEmail(email){
    this.email = email
  }
}

decorate(CandidateStore, {
  candidateEmail: observable,
  candidates: observable,




});

export default new CandidateStore();
