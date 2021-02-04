import React from "react";

function showData(){

	const [data, setData] = React.useState([]);


	useEffect(()=>{
	setData(4);
	},[data])

	
	return <div>{data.map(item => <li>{item}</li>)}</div>
}