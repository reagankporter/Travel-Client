import React, {useState} from 'react';
import './createBucketList.css';

const CreateBucketList = (props) => {
    console.log(props);
    const [nameOfPlace, setNameOfPlace] = useState('');
    const [locationOfPlace, setLocationOfPlace] = useState('');
    const [eventInPlace, setEventInPlace] = useState('');
    const [whyAdded, setWhyAdded] = useState('');

    const postBucketList= (e) => {
        e.preventDefault();

        let url = 'http://localhost:3000/bucketlist/create';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nameOfPlace: nameOfPlace,
                locationOfPlace: locationOfPlace,
                eventInPlace: eventInPlace,
                whyAdded: whyAdded
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            props.setCreateBucketList(false);
        })
        .catch(err => console.log(err))
    };

    return (
        <form onSubmit={postBucketList}>
            <input type='text' onChange={(e) => setNameOfPlace(e.target.value)} value={nameOfPlace} placeholder='Name of Place' />
            <input type='text' onChange={(e) => setLocationOfPlace(e.target.value)} value={locationOfPlace} placeholder='Location of Place' />
            <input type='text' onChange={(e) => setEventInPlace(e.target.value)} value={eventInPlace} placeholder='Event of Interest' />
            <input type='text' onChange={(e) => setWhyAdded(e.target.value)} value={whyAdded} placeholder='This is a Bucket List Item Because:' />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )

};

export default CreateBucketList;