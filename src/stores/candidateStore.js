import React from "react";
import { decorate, observable, computed, action } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://127.0.0.1:8000"
});

class CandidateStore {
  constructor() {
    this.candidateEmail = "";
    this.candidates = [];
    this.employerEmail = "";
    this.employer = [];
    this.employerCompany = "";
    this.loading = true;
  }

  submitcandidatemail(e) {
    e.preventDefault();

    let obj = {
      candidate_email: this.candidateEmail,
      company_name: this.companyName,
      company_email: this.companyEmail
    };

    this.candidates.push(obj);

    // instance
    //   .post("/", obj)
    //   .then(res => res.data)
    //   .then(x => {
    //     x = obj;
    //   })
    //   .catch(err => console.error(err));
  }
}

decorate(CandidateStore, {
  candidateEmail: observable,
  employerEmail: observable,
  employerCompany: observable,
  candidates: observable,
  employer: observable,
  setEmail: action,
  setCompanyEmail: action,
  setCompanyName: action
});

export default new CandidateStore();
