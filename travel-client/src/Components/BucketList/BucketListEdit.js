import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const BucketListEdit = (props) => {
    const [editNameOfPlace, setEditNameOfPlace] = useState(props.bucketListToUpdate.nameOfPlace);
    const [editLocationOfPlace, setEditLocationOfPlace] = useState(props.bucketListToUpdate.locationOfPlace);
    const [editEventInPlace, setEditEventInPlace] = useState(props.bucketListToUpdate.eventInPlace);
    const [editWhyAdded, setEditWhyAdded] = useState(props.bucketListToUpdate.whyAdded);

    const bucketListUpdate = (e, bucketList) => {
        e.preventDefault();
        fetch(`http://localhost:3000/bucketList/${props.bucketListToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                bucketList: {
                    nameOfPlace: editNameOfPlace,
                    locationOfPlace: editLocationOfPlace,
                    eventInPlace: editEventInPlace,
                    whyAdded: editWhyAdded
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then((res) => {
            props.fetchBucketList();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit A Bucket List Item!</ModalHeader>
            <ModalBody>
                <Form onSubmit={bucketListUpdate}>
                    <FormGroup>
                        <Label htmlFor='nameOfPlace'>Edit Name:</Label>
                        <Input name='nameOfPlace' value={editNameOfPlace} onChange={(e) => setEditNameOfPlace(e.target.value)} placeholder='Name of Place' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='locationOfPlace'>Edit Location:</Label>
                        <Input name='locationOfPlace' value={editLocationOfPlace} onChange={(e) => setEditLocationOfPlace(e.target.value)} placeholder='Location of Place' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='eventInPlace'>Edit Event:</Label>
                        <Input name='eventInPlace' value={editEventInPlace} onChange={(e) => setEditEventInPlace(e.target.value)} placeholder='Event of Interest' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='whyAdded'>Edit Why:</Label>
                        <Input name='whyAdded' value={editWhyAdded} onChange={(e) => setEditWhyAdded(e.target.value)} placeholder='This is a Bucket List Item Because:' />
                    </FormGroup>
                    <Button type='submit'>Update Item!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default BucketListEdit;