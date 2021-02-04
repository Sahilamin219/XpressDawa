import React from "react";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { Ref, Button, Container, Divider, Visibility, onItemClick, List } from "semantic-ui-react";
import Banner from "./components/Banner";
import StickyNavbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Preview from './components/Preview';
import Homepage from './components/Homepage';
import { Route , withRouter} from 'react-router-dom';
import firebase from "firebase";
import 'firebase/auth';
import PhoneLogin from './PhoneLogin';
import Fetch from './Fetch';
import SearchPage from './SearchPage';
// import firebase from './firebase'

class App extends React.Component {
    // componentDidMount() {
    //     const config = {
    //         apiKey: "AIzaSyBx-6hndhYVZEgSCLberx4wfQZBCua7LnE",
    //         authDomain: "xpressdawadev.firebaseapp.com",
    //         projectId: "xpressdawadev",
    //         storageBucket: "xpressdawadev.appspot.com",
    //         messagingSenderId: "317891675877",
    //         appId: "1:317891675877:web:3d3bff314519aa3b15760c",
    //         measurementId: "G-NFEY501TB2"
    //     };
    //     firebase.initializeApp(config);
    // }

    render() {
      return (
      <React.Fragment>
      <div className="App">
        <SearchPage/>
      </div>
      </React.Fragment>
    );
  }
}
export default withRouter(App);//class App extends Component {constructor(props) {super(props);
// <Route exact path="/" component={Homepage}/>
// <Route path='/navigation' component={Preview}/>

// <label></label>
// <Button onClick={this.handleme} id='sign-in-button'>Click me</Button>