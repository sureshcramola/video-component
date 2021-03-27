import React, { Component } from "react";
import { Form } from "react-bootstrap";
import global from "../../../common/global";
import utility from "../../../common/utility";

class Login extends Component {
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
      seedPhraseErrorMessage: "",
      privateKey: "",
      privateKeyError: false,
      privateKeyErrorMessage: ""
    };
  }

  validateData = () => {
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
    // console.log("jjjjjjjjjjj", this.state)
  };

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
          Login
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
          {/* <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="username"
              value={username}
              onChange={e => this.handleInput(e)}
            />
            <span id="error-msg">
              {this.state.passwordError ? this.state.passwordErrorMessage : null}
            </span>
          </Form.Group> */}
          {/* <Form.Group controlId="formGroupSeedPhrase">
            <Form.Label>Seed Phrase</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="seedPhrase"
              value={seedPhrase}
              onChange={e => this.handleInput(e)}
            />
            <span id="error-msg">
              {this.state.passwordError ? this.state.passwordErrorMessage : null}
            </span>
          </Form.Group> */}
          <Form.Group controlId="formGroupPrivateKey">
            <Form.Label>Private Key</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="privateKey"
              value={privateKey}
              onChange={e => this.handleInput(e)}
            />
            <span id="error-msg">
              {/* {this.state.passwordError ? this.state.passwordErrorMessage : null} */}
            </span>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              id="input"
              className="form-check-input ml-1"
              label="Remember me"
            />
          </Form.Group>
          {/*<Button
                type="submit"
                onClick={this.validateData}
                className="btn float-right"
              >
                Submit
            </Button>*/}
        </Form>
      </>
    );
  }
}

export default Login;
