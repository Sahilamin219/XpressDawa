import firebase from 'firebase';

import 'firebase/auth';

const config={
	apiKey: "AIzaSyBx-6hndhYVZEgSCLberx4wfQZBCua7LnE",
    authDomain: "xpressdawadev.firebaseapp.com",
    projectId: "xpressdawadev",
    storageBucket: "xpressdawadev.appspot.com",
    messagingSenderId: "317891675877",
    appId: "1:317891675877:web:3d3bff314519aa3b15760c",
    measurementId: "G-NFEY501TB2"
}
firebase.initializeApp(config);
// class Firebase {
//   constructor() {
//     app.initializeApp(config);
 
//     this.auth = app.auth();
//   }
// }
 
// export default Firebase;
export default firebase
