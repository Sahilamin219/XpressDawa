import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchMe from './SearchMe';
import CountryList from './CountryList';
import Delete from './Delete';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => { 
         setCountryList(data) 
         console.log("your data", data);
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {
    fetchData()
  },[]);
  
  return (
    <>
      <h1>Medicines List</h1>
      <SearchBar/>
      <p> SECOND </p>
      <SearchMe/>
    </>
   );
}
export default SearchPage;
///<Delete/>
// <h1>Country List</h1>
// <SearchBar 
//  input={input} 
//  onChange={updateInput}
// />
// <CountryList countryList={countryList}/>