import React from "react";
import { decorate, observable, computed } from "mobx";
// import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { Redirect } from 'react-router-dom';



const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class AuthStore {
  constructor() {

    this.errors = [];

  }


   authenticate(token){
    console.log ("You are in authenticate");
  axios.get("http://127.0.0.1:8000/authenticate/"+ token)
    .then(response => console.log(response.data))
    .then(()=>{
      return 1;
      console.log ("You are in STATUS OK");
      <Redirect to = "/instructions/:token"/>}
      )
    .catch(
      error => {
        console.log ("You are in STATUS NOT OK");

        console.log(error);
        return 0;
      // <Redirect  from = '/instructions:token' to='/thankyou'/>
    }
    );
}



//authenticating user by adding the token to each url or axios request made
}

decorate(AuthStore, {
errors: observable,


});

export default new AuthStore();
