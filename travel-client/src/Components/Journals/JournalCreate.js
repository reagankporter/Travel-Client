import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const JournalCreate = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [entry, setEntry] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/journal/create', {
            method: 'POST',
            body: JSON.stringify({
                journal: {
                 title: title,
                 date: date,
                 entry: entry,
                 rating: rating
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then((res) => res.json())
        .then((journalData) => {
            console.log(journalData);
            setTitle('');
            setDate('');
            setEntry('');
            setRating(0);
            props.fetchJournal();
        })
    }

    return (
        <div>
            <h3>Add A Journal Entry </h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='Title' />
                    <Input name='Title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='Date' />
                    <Input name='Date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='Entry' />
                    <Input name='Entry' value={entry} onChange={(e) => setEntry(e.target.value)} placeholder='Enter Your adventures' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='Rating' />
                    <Input name='Rating' value={rating} onChange={(e) => setRating(e.target.value)} placeholder='Adventure "FUN" rating' />
                </FormGroup>
                <Button type='submit'>Add Item</Button>
            </Form>
        </div>
    )
}

export default JournalCreate;