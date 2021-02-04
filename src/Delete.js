import React, { useState, useEffect } from 'react';
import SearchMe from './SearchMe';
import firebase from "firebase";

let firestore = firebase.firestore();
const db = firebase.firestore();

const happen =() =>{
  // const [newList, setnewList]  = useState('');
  const list=["sahil", "amin"];

  db.collection('medicines/byBrandName/A').get().then( (snapshot) => {
    snapshot.docs.forEach( (doc) => { 
      if(doc.data().brand_name){
        console.log(doc.data().brand_name);
        list.push(doc.data().brand_name);
      }
      else{
        console.log(doc.data().id);
        // document.write(list.push(doc.data().id))
        // list = list.concat(doc.data().id);
        list.insert(doc.data().id);
      } 
    })
  } )
  return list;
}
// let flag=1;
const Delete = (props) => {
  const [myinput, setMyinput]  = useState(["sahil"]);
  const [ med_list, setMed_list] = useState();

  const updateInput = async (input) => {
    const filtered = med_list.filter(medicineName => {
      return medicineName.name.toLowerCase().includes(input.toLowerCase())
    })
      setMyinput(input);
      setMed_list(filtered);
  }
  // if(flag){
  //   var yourlist = myinput.concat([myinput]);  
  //   yourlist = happen();
  //   setMyinput({myinput: yourlist});
  //   flag=0;
  //   console.log("JUST ONCE");
  //   myinput.map( item => {
  //     console.log(item, " ");
  //   })
  // }

  // useEffect( () => {
  //   let yourlist=happen();
  //   setMyinput({
  //     myinput : yourlist
  //   })
  // },[]);

  useEffect( () => {
    db.collection('medicines/byBrandName/A').get().then( (snapshot) => {
    snapshot.docs.forEach( (doc) => { 
      if(doc.data().brand_name){
        console.log(doc.data().brand_name);
        setMyinput(myinput => [...myinput, doc.data().brand_name]);
      }
      else{
        console.log(doc.data().id);
        setMyinput(myinput => [...myinput, doc.data().id]);
      } 
    })
  } )
  }, [])

  return (
    <>
      <div>
      <button onClick={happen}>click me</button>
      <ul>
      { myinput.map(item => (
            <li key={item}>
              {item} &nbsp;
            </li>
          ))}
      </ul>
     </div>
    </>
   );
}

export default Delete;