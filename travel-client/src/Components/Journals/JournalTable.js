import React, {useState} from 'react';
import {Table, Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import JournalEdit from './JournalEdit';

const JournalTable = (props) => {
    const [journal, setJournal] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);

    const deleteJournal = (journal) => {
        fetch(`http://localhost:3000/journal/${journal.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchJournal())
    }
    const fetchJournal = () => {
        fetch('http://localhost:3000/journal/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then((res) => res.json())
        .then((journalData) => {
            setJournal(journalData)
        })
        .catch(err => console.log(err))
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    
    const updateOff = () => {
        setUpdateActive(false);
    }

    const journalMapper = () => {
        return props.journal.map((journal, index) => {
            return (
                <div>

                    <tr key={index}>
                        
                        <Card>
                            <CardBody>
                                <CardTitle>{journal.title}</CardTitle>
                                <CardSubtitle>{journal.date}</CardSubtitle>
                                <CardText>{journal.entry} <br/> {journal.rating}</CardText>
                                <td>
                                    <JournalEdit updateOff={updateOff} token={props.token} fetchJournal={fetchJournal} journalToUpdate = {journal}/>
                                    <Button onClick={() => {deleteJournal(journal)}}>Delete</Button> 
                                </td>
                            </CardBody>
                        </Card>

                    </tr>
                </div>
            )

        })
    }

    return (
        <div>
            <h3>Journal</h3>
            <hr />
            <Table striped>
                <tbody>
                    {journalMapper()}
                </tbody>
            </Table>
        </div>
    )
}

export default JournalTable;