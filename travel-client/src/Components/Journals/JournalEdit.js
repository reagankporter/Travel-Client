import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const JournalEdit = (props) => {
    console.log(props)
    const [editTitle, setEditTitle] = useState(props.journalToUpdate.title);
    const [editDate, setEditDate] = useState(props.journalToUpdate.date);
    const [editEntry, setEditEntry] = useState(props.journalToUpdate.entry);
    const [editRating, setEditRating] = useState(props.journalToUpdate.rating);
    const [modalOpen, setModalOpen] = useState(false)

    const journalUpdate = (e, journal) => {

        console.log('Test here to Journal update')
        fetch(`http://localhost:3000/journal/update/${props.journalToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                journal: {
                  title: editTitle,
                  date: editDate,
                  entry: editEntry,
                  rating: editRating
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then((res) => {
            props.fetchJournal();
            props.updateOff();
        })
    }

const toggleModal = () => {
    setModalOpen(!modalOpen)
}

    return (
        <>
        <button onClick={toggleModal}>Edit</button>
        <Modal isOpen={modalOpen}>
            <ModalHeader>Edit Adventure Log</ModalHeader>
            <ModalBody>
                <Form onSubmit={journalUpdate}>
                    <FormGroup>
                        Name <Label htmlFor='Title'>Edit Title:</Label>
                        <Input name='Title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder='Title' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='Date'>Edit Date:</Label>
                        <Input name='Date' value={editDate} onChange={(e) => setEditDate(e.target.value)} placeholder='Date' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='Entry'>Edit Entry:</Label>
                        <Input name='Entry' value={editEntry} onChange={(e) => setEditEntry(e.target.value)} placeholder='Entry' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='Rating'>Edit Rating:</Label>
                        <Input name='Rating' value={editRating} onChange={(e) => setEditRating(e.target.value)} placeholder='Adventure "FUN" Rating' />
                    </FormGroup>
                    <Button type='submit'>Update Log</Button>
                </Form>
            </ModalBody>
        </Modal>
        </>
    )
}

export default JournalEdit;