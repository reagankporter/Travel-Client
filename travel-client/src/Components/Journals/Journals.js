import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'reactstrap';
import JournalCreate from './JournalCreate';
import JournalTable from './JournalTable'
import JournalEdit from './JournalEdit';
import './journals.css'


const Journals = (props) => {
    const [journal, setJournal] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [journalToUpdate, setJournalToUpdate] = useState({});

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
            console.log(journalData)
        })
        .catch(err => console.log(err))
    }

    const editUpdateJournal = (journal) => {
        setJournalToUpdate(journal);
        console.log(journal);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }
    console.log(journal);
    useEffect(() => {
        fetchJournal();
    }, [])

    return (
        <Container>
            <Row>
                <Col md='3'>
                    <JournalCreate fetchJournal={fetchJournal} token={props.token} />
                </Col>
                <Col md='9'>
                    <JournalTable journal={journal} editUpdateJournal={editUpdateJournal} 
                    updateOn={updateOn} fetchJournal={fetchJournal} token={props.token} />
                </Col>
                {/* {updateActive ? <JournalEdit journalToUpdate={journalToUpdate} id={journal.id}
                updateOff={updateOff} token={props.token} fetchJournal={fetchJournal} /> : <> </> } */}
            </Row>
        </Container>
    )

};

export default Journals;