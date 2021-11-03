import React from 'react';
import {Table, Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import JournalEdit from './JournalEdit';
const JournalTable = (props) => {

    const deleteJournal = (journal) => {
        fetch(`http://localhost:3000/journal/delete/${journal.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchJournal())
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
                                    <JournalEdit token = {props.token} journalToUpdate = {journal}/>
                                    {/* <Button onClick={() => {props.editUpdateJournal(); props.updateOn()}}>Edit</Button>    */}
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