import React from "react";
import { decorate, observable, computed } from "mobx";

// Utils
import setAuthToken from "../utils/setAuthToken";

const instance = axios.create({
  baseURL: "http://localhost:8000"
});

class TestStore {
  constructor() {
    this.currentUser = localStorage.getItem("currentUser");
    this.token = localStorage.getItem("token");
    this.errors = [];
    setAuthToken();
  }

  signup() {
      return this.authenticateUser("signup");
    }

  login() {
      return this.authenticatUser("login");
    }

  logout() {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      this.currentUser = null;
      this.token = null;
      setAuthToken();
    }

    authenticatUser(type) {
      return instance
        .post(`/${type}/`, {
          username: this.username,
          password: this.password
        })
        .then(res => res.data)
        .then(({ username, token }) => {
          localStorage.setItem("currentUser", username);
          localStorage.setItem("token", token);
          this.currentUser = username;
          this.token = token;
          this.resetForm();
          setAuthToken();
        })
        .catch(err => {
          console.log(err.response.data);
          Object.entries(err.response.data).forEach(
            ([errType, errList]) =>
              (this.errors = this.errors.concat(
                errList.map(message => (
                  <p key={errType + message}>
                    <strong>{errType}:</strong> {message}
                  </p>
                ))
              ))
          );
        });
    }

  setIndex(index){
    this.index = index
  };

decorate(TestStore, {
  token: observable,
  errors: observable,
});

export default new TestStore();
