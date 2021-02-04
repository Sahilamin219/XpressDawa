import React,  { useState, useEffect } from "react";
import firebase from "firebase";

let firestore = firebase.firestore();
const db = firebase.firestore();


const SearchBar = () => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  const [myinput, setMyinput]  = useState(["sahil"]);
  const [ med_list, setMed_list] = useState(["sahil"]);
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    const input = e.target.value;
    const filtered = med_list.filter(medicineName => {
      return medicineName.toLowerCase().includes(input.toLowerCase())
    })
      setMyinput(filtered);
      // setInput(input);
      console.log(med_list);
  }

  useEffect( () => {
    db.collection('medicines/byBrandName/A').get().then( (snapshot) => {
    snapshot.docs.forEach( (doc) => { 
      if(doc.data().brand_name){
        console.log(doc.data().brand_name);
        setMyinput(myinput => [...myinput, doc.data().brand_name]);
        setMed_list(med_list => [...med_list, doc.data().brand_name]);

      }
      else{
        console.log(doc.data().id);
        setMyinput(myinput => [...myinput, doc.data().id]);
        setMed_list(med_list => [...med_list, doc.data().id]);
      } 
    })
  } )
  }, [])

  return (
    <>
    <div>
    <input 
     style={BarStyling}
     key="random1"
     placeholder={"search medicines by name"}
     input = {input}
     onChange={updateInput}
    />
    <div>
      <ul>
      { myinput.map(item => (
            <li key={item}>
              {item} &nbsp;
            </li>
          ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default SearchBar
// The keyword variable is assigned to the value of the input meanwhile the setKeyword variable is assigned as a function
// to handle the change event of the input.