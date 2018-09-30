import React from "react";
import { decorate, observable, action } from "mobx";
import {withRouter} from 'react-router-dom';
import {observer} from "mobx-react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class CandidateStore {
  constructor() {
    this.candidateEmail = "";
    this.companyEmail = "";
    this.companyName = "";
    this.loading = true;
    this.candidates = [];
  }

  submitcandidatemail(data) {
    // e.preventDefault();
    console.log("Entered the store")
    //
    // let obj = {
    //   candidate_email: this.candidateEmail,
    //   company_name: this.companyName,
    //   company_email: this.companyEmail
    // };

    axios.post("http://127.0.0.1:8000/candidate/", data)

      .then(response => console.log(response))

      .catch(error => console.log(error));

  }
}

decorate(CandidateStore, {
  candidateEmail: observable,
  comapnyEmail: observable,
  companyName: observable,
  candidates: observable,
  setEmail: action,
  setCompanyEmail: action,
  setCompanyName: action
});

export default new CandidateStore();
