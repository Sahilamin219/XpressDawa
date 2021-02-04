import React, { Component } from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import firebase from "./firebase";

export default class PhoneLogin extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      alert: false,
    };
  }

  onChangeHandler = (event) => {
    console.log('onChangeHandler clicked');
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpRecaptcha = () => {
    console.log('setUpRecaptcha clicked');
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisble",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  onSignInSubmit = (e) => {
    console.log('sign clicked');
    e.preventDefault();
    let data="";
    this.setUpRecaptcha();
    let phoneNumber = "+91" + this.state.mobile;
    let testVerificationCode='123456';
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");

        // return confirmationResult.confirm(testVerificationCode)
        // let code = prompt('enter the otp','');
        // if(code==null)return ;
        // e.confirm(code).then(function(result){
        //   console.log(result.user, 'user');
        //   document.querySelector('label').textContent=result.user.phoneNumber + 'number verified';
        // })
        // ------------------------------
        // User signed in successfully.
        let user = confirmationResult.user;    
        alert("OTP is verified!!!");
        this.data="doneit";

           firebase.database().ref("appoinment").push({
             name:this.state.name,
             date:this.state.curTime
          });
         alert(" Data saved successfully");
         window.location.reload(false);

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onSubmitOtp = (e) => {
    console.log('otp clicked');
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        console.log("Result" + result.verificationID);
        let user = result.user;
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  render() {
    return (
      <div>
        <label></label>
        <container fluid="sm" className="mt-3">
          <div className="row">
            <div className='column'>
              <h2 className="mb-3">Login</h2>
              <form onSubmit={this.onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <div className='form-group'>
                  <input
                    type="number"
                    name="mobile"
                    className='form-control'
                    placeholder="Mobile Number"
                    onChange={this.onChangeHandler}
                    required
                  />
                </div>
                <button button="Submit" type="submit" >Submit</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className='column'>
              <h2 className="mb-3">Enter OTP</h2>
              <form onSubmit={this.onSubmitOtp}>
                <div className='form-group'>
                  <input
                    id="otp"
                    type="number"
                    name="otp"
                    className='form-control'
                    placeholder="OTP"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <button button="Submit" type="submit" >Submit</button>
              </form>
            </div>
          </div>
        </container>
      </div>
    );
  }
}
