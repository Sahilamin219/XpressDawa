import React, { Component } from "react";
import firebase from "./firebase";

let firestore = firebase.firestore();
const db = firebase.firestore();
db.settings( {timestampsInSnapshots : true} );
db.collection('medicines').get().then( (snapshot) => {
  snapshot.docs.forEach( (doc) => { 
    console.log(doc.data());
  })
})

// let docData = {
//   stringExample: "Hello world!",
//   booleanExample: true,
//   numberExample: 3.14159265,
//   dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
//   arrayExample: [5, true, "hello"],
//   nullExample: null,
//   objectExample: {
//       a: 5,
//       b: {
//           nested: "foo"
//       }
//   }
// };

export default class Fetch extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      form: true,
      alert: false,
    };
  }
  state = { title: '' };
  onChangeHandler = (event) => {
    console.log('onChangeHandler clicked');
    // const { name, value } = event.target;
    // console.log(value);
    this.setState({
      title: event.target.value
    });
    console.log(this.title);
    const key = event.target.name;
    const valuee = event.target.getAttribute('value');
    const otherValue = event.target.value;

    this.setState({ [key]: valuee });
    // console.log(key, valuee, otherValue);
  };

  handleSubmit = (event) => {
    // console.log("PROPS ON SUBMIT", this.props)
    // this.props.onSubmit(this.state.title);
    // this.setState( {title:''} );
    console.log('save clicked');
    event.preventDefault();
    const docRef = firestore.doc("head/myhead")
    // this.setState({title:event.target.value});
    console.log(event.target)
    console.log(event.target.previousElementSibling.value)
    //use Object destructuring to fetch all element values''
    // const {style, dataset} = event.target
    // console.log(style)
    // console.log(dataset.tag)
    alert('A name was submitted: ' + event.target.previousElementSibling.value);
    // alert('A name was submitted: ' + event.target.getAttribute('value'));

    // docRef.set({
    //   title : event.target.previousElementSibling.value
    // }).then(function(){
    //   console.log("SAVED !!!");
    // }).catch(function(error){
    //   console.log("ERROR !!!");
    // });

    let docData = {
      stringExample: event.target.previousElementSibling.value
    };
    db.collection("DATA_NEW").doc("FIRST_ONE").set(docData).then(function() {
      console.log("Document successfully written!");
    });
  }

  render() {
    console.log("PROPS",this.props)

    return (
      <div>
        <label></label>
        <container fluid="sm" className="mt-3">
          <div className="row">
            <div className='column'>
              <h2 className="mb-3">Your Heading</h2>
              <div>
                <textarea value={this.state.title} onChange={this.onChangeHandler} /> 
                <button onClick={this.handleSubmit}>
                  click me plz
                </button>
              </div>
            </div>
          </div>
        </container>
      </div>
    );
  }
}
///
//<div className='form-group'>
//   <input
//     type="textfield"
//     name="heading"
//     className='form-control'
//     placeholder="input your text"
//     onChange={this.onChangeHandler}
//     value={this.state.value}
//     required
//   />
// </div>
// <button button="Submit" type="submit" >save</button>


// <form onSubmit={ this.handleSubmit }>
//   <label>
//   <textarea value={this.state.title} onChange={this.onChangeHandler} /> 
//   </label>
//   <input type="submit" value="Submit" />
// </form>