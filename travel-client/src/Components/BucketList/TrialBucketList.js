import React, {useState, useEffect} from 'react';
import './bucketList.css';
import DisplayBucketList from './BucketList/BucketList';
import CreateBucketList from './CreateBucketList/CreateBucketList';

const BucketList = () => {

//! Display All User's Bucket List Items

function displayMine() {
    console.log('displayMine called');
    const accessToken = localStorage.getItem('SessionToken');

    fetch(`http://localhost:3000/bucketlist/mine`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let display = document.getElementById('bucketList');
        for(let i = 0; i = display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('bucketList');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = 'You have no bucket-list items!';
            header.setAttribute('class', 'noPosts')
        } else {
            for(let i = 0; i < data.length; i++){
                let display = document.getElementById('bucketList');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5');
                let subtitle = document.createElement('h6');
                let para1 = document.createElement('p');
                let para2 = document.createElement('p');
                let editBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');
                    
                let current = data[i];
                let nameOfPlace = current.nameOfPlace;
                let locationOfPlace = current.locationOfPlace;
                let eventInPlace = current.eventInPlace;
                let whyAdded = current.whyAdded;

                header.textContent = nameOfPlace;
                subtitle.textContent = locationOfPlace;
                para1.textContent = eventInPlace;
                para2.textContent = whyAdded;
                editBtn.textContent = "Edit";
                deleteBtn.textContent = "Delete";
      
                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para1);
                body.appendChild(para2);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);
      
                card.setAttribute("id", current.id);
                card.setAttribute("class", "card");
                body.setAttribute("class", "card-body");
                header.setAttribute("class", "card-title");
                subtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
                para1.setAttribute("class", "card-text");
                para2.setAttribute("class", "card-text");
      
                editBtn.setAttribute("class", "btn btn-dark editBtn");
                editBtn.setAttribute("type", "button");
                editBtn.setAttribute("onclick", `editBucketList(${current.id})`);
      
                deleteBtn.setAttribute("class", "btn btn-dark editBtn");
                deleteBtn.setAttribute("type", "button");
                deleteBtn.setAttribute("onclick", `deleteBucketList(${current.id})`);
         
            }    
        }
    })
    .catch(err => {
        console.log(err)
    })
}


//! Post New Bucket List Item

function postBucketList() {
    const accessToken = localStorage.getItem('SessionToken')
    let nameOfPlace = document.getElementById('nameOfPlace').value;
    let locationOfPlace = document.getElementById('locationOfPlace').value;
    let eventInPlace = document.getElementById('eventInPlace').value;
    let whyAdded = document.getElementById('whyAdded').value;

    let newEntry = {
        bucketList: {
            nameOfPlace: nameOfPlace,
            locationOfPlace: locationOfPlace,
            eventInPlace: eventInPlace,
            whyAdded: whyAdded
        }
    }
    fetch(`http://localhost:3000/bucketlist/create`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }),
        body: JSON.stringify(newEntry)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayMine()
    })
    .catch(err => {
        console.log(err)
    })
}





    return (
        <div className='main'>
            <div className='mainDiv'>
                 <div className='card'>

                 </div> 

             </div>
         </div>
     )

 };

export default BucketList;