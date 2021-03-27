import React, { Component } from "react";
import { Form } from "react-bootstrap";
import global from "../../../common/global";
import utility from "../../../common/utility";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: false,
      emailErrorMessage: "",
      username: "",
      usernameError: false,
      usernameErrorMessage: "",
      seedPhrase: "",
      seedPhraseError: false,
      seedPhraseErrorMessage: ""
    };
  }

  validateData = e => {
    e.preventDefault();
    const { email, emailError, emailErrorMessage } = this.state;
    if (email == "") {
      this.setState({
        emailError: true,
        emailErrorMessage: "Email can't be empty"
      });
    } else {
      let valid = utility.checkDataValidation(
        this.state.email,
        global.regex.email
      );
      if (!valid) {
        this.setState({
          emailError: true,
          emailErrorMessage: "Email is not valid"
        });
      }
    }
    console.log("jjjjjjjjjjj", this.state);
  };

  handleInput(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (this.state.email.length > 0 && this.state.username.length > 0) {
          let seed = utility.generateSeedPhrase(14);
          this.setState({
            seedPhrase: seed
          });
        }
      }
    );
  }

  render() {
    const {
      email,
      emailError,
      emailErrorMessage,
      username,
      seedPhrase,
      privateKey
    } = this.state;
    return (
      <>
        <h2 className="text-center">
          Sign up
        </h2>
        <Form className="login-form">
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => this.handleInput(e)}
            />
            <span id="error-msg">
              {emailError ? emailErrorMessage : null}
            </span>
          </Form.Group>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="username"
              value={username}
              onChange={e => this.handleInput(e)}
            />
            <span id="error-msg">
              {/* {this.state.passwordError ? this.state.passwordErrorMessage : null} */}
            </span>
          </Form.Group>
          {/* <Form.Group controlId="formGroupSeedPhrase">
            <Form.Label>Seed Phrase</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="seedPhrase"
              value={seedPhrase}
              onChange={e => this.handleInput(e)}
              disabled
            />
            <span id="error-msg">
              {this.state.passwordError ? this.state.passwordErrorMessage : null}
            </span>
          </Form.Group> */}

          {/*<Button
              type="submit"
              onClick={e => this.validateData(e)}
              className="btn float-right"
            >
              Submit
            </Button>*/}
        </Form>
      </>
    );
  }
}

export default Signup;
