import React, {useState, useEffect} from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const BucketListCreate = (props) => {
    const [nameOfPlace, setNameOfPlace] = useState('');
    const [locationOfPlace, setLocationOfPlace] = useState('');
    const [eventInPlace, setEventInPlace] = useState('');
    const [whyAdded, setWhyAdded] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/bucketlist/', {
            method: 'POST',
            body: JSON.stringify({
                bucketList: {
                    nameOfPlace: nameOfPlace,
                    locationOfPlace: locationOfPlace,
                    eventInPlace: eventInPlace,
                    whyAdded: whyAdded
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((bucketListData) => {
            console.log(bucketListData);
            setNameOfPlace('');
            setLocationOfPlace('');
            setEventInPlace('');
            setWhyAdded('');
            props.fetchBucketList();
        })
    }

    return (
        <div>
            <h3>Add A Bucket-List Item!</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    Name <Label htmlFor='nameOfPlace' />
                    <Input name='nameOfPlace' value={nameOfPlace} onChange={(e) => setNameOfPlace(e.target.value)} placeholder='Name of Place' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='locationOfPlace' />
                    <Input name='locationOfPlace' value={locationOfPlace} onChange={(e) => setLocationOfPlace(e.target.value)} placeholder='Location of Place' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='eventInPlace' />
                    <Input name='eventInPlace' value={eventInPlace} onChange={(e) => setEventInPlace(e.target.value)} placeholder='Event of Interest' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='whyAdded' />
                    <Input name='whyAdded' value={whyAdded} onChange={(e) => setWhyAdded(e.target.value)} placeholder='This is a Bucket List Item Because:' />
                </FormGroup>
                <Button type='submit'>Add Item</Button>
            </Form>
        </div>
    )
}

export default BucketListCreate;