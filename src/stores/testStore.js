import React from "react";
import { decorate, observable, computed } from "mobx";
// import setAuthToken from "../components/utils";
import axios from "axios";


const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class TestStore {
  constructor() {
    this.questions = [];

  }


  getQuestions(){
    console.log("Inside questions")

  axios.get("http://127.0.0.1:8000/question/"+ this.token)
    .then(response => response.data)
    .then( response =>
      console.log ("Hello")
      )
    .catch(error => console.error(error));
}

getTest(){
  console.log("Inside test ")

axios.get("http://127.0.0.1:8000/assessment/" )
  .then(response => response.data)
  .then( test => {this.questions = test;
    console.log (this.questions)}
  )
  .catch(error => console.error(error));
}


//authenticating user by adding the token to each url or axios request made
}

decorate(TestStore, {
questions: observable,


});

export default new TestStore();
