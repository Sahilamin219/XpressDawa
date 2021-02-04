import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from 'react-router-dom';

import App from "./App";
import firebase from 'firebase'
import csvjson from './csvjson';
import serviceAccountKey from './serviceAccountKey';
import * as admin from "firebase-admin";
// import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const rootElement = document.getElementById("root");
// const config={
// 	apiKey: "AIzaSyBx-6hndhYVZEgSCLberx4wfQZBCua7LnE",
//     authDomain: "xpressdawadev.firebaseapp.com",
//     projectId: "xpressdawadev",
//     storageBucket: "xpressdawadev.appspot.com",
//     messagingSenderId: "317891675877",
//     appId: "1:317891675877:web:3d3bff314519aa3b15760c",
//     measurementId: "G-NFEY501TB2"
// }

// firebase.initializeApp(config);
// export const auth = firebase.auth();
firebase.auth().languageCode = 'IN';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// const admin = require('./node_modules/firebase-admin');//giving error
// const serviceAccount = require("./serviceAccountKey.json");
// const data = require("./csvjson.json");
// const collectionKey = "[ your medicine name ]";//name of the collection
// admin.initializeApp({  
// 	credential: admin.credential.cert(serviceAccount),
//   	databaseURL: "https://xpressdawadev-default-rtdb.firebaseio.com"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
// if (data && (typeof data === "object")) {
// 	console.log("IMPORTING OBJECTS")
// 	Object.keys(data).forEach(docKey => { 
// 		firestore
// 			.collection(collectionKey)
// 			.doc()
// 			.set(data[docKey])
// 			.then((res) => {    
// 				console.log("Document " + docKey + " successfully written!");
// 			})
// 			.catch((error) => {
// 				console.error("Error writing document: ", error);
// 			});
// 	});
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);/// faux pas 