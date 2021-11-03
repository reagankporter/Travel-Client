import React, { useEffect, useState } from "react";
import './travel.css';;


function CheckResponse({ data }) {
    const [search, setSearch] = useState("");
    let searchData = search.charAt(0).toUpperCase() + search.slice(1);
    if (!data.data) return "Data is Not available for this destination";
    return (
    <div>
        <h4>Destination Name: {data.data.attributes.name} </h4>
        <img src={data.included[1].attributes.image.medium} alt="search"/>
        <p>Capital: {data.data.attributes.capital}</p>
        <p>Population: {data.data.attributes.population} </p>
        <p>Tourist Rating: {data.data.attributes.average_rating} </p>
        <p >Top 5 Cities and Towns: 
        <br/>
        <br/>
        {data.data.attributes.top_cities_and_towns[0].name}
        <br/>
        {data.data.attributes.top_cities_and_towns[1].name} 
        <br/>
        {data.data.attributes.top_cities_and_towns[2].name}
        <br/>
        {data.data.attributes.top_cities_and_towns[3].name}
        <br/>
        {data.data.attributes.top_cities_and_towns[4].name}</p>
        <p>Available Airbnb's: <a>{data.data.attributes.airbnb_url}</a></p>
        <p>For More Info: {data.data.attributes.wikipedia_url}</p>
    </div>
    );
}

const Destination = () => {
    const [des, setDes] = useState({});
    const [search, setSearch] = useState("");
    const [isdata, setIsData] = useState(false);

    const baseUrl = `https://api.roadgoat.com/api/v2/destinations/${search}`;

    const requestOptions = {
    method: "GET",
    headers: {
    Authorization:
        "Basic NmM0YzYwYzBlMmQ2MWUxYWE0NDI4NTMxODkzOTI5MjU6YzZiNmY1MTFmNDcwZTc3ZDRkMjJjNmVmN2YyNjAwYjk=",
    },
    redirect: "follow",
    };

    const getResponse = async () => {
    let searchTerm = search.charAt(0).toUpperCase() + search.slice(1);
    const result = await fetch(baseUrl, requestOptions);
    const data = await result.json();
    setDes(data);
    console.log(data);
    if (data.error) {
    setIsData(false);
    }
    setIsData(true);
};

    const onInputChange = (e) => {
    setSearch(e.target.value);
    };
    return (
    <div>
        <input type="text" value={search} onChange={onInputChange} />
        <button type="submit" onClick={getResponse}>
        Search
        </button>
        <br></br>
        {isdata ? <CheckResponse data={des} /> : "Enter a destination"}
    </div>
);
};

export default Destination;