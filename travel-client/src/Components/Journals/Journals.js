import React, {useState, useEffect} from 'react';
import './journals.css';
import DisplayJournals from './Journal/Journal';
import CreateJournal from './CreateJournal/CreateJournal';

const Journals = (props) => {
  console.log(props)
  const [journals, setJournals] = useState([]);
  const [createJournal, setCreateJournal] = useState(false);

  const fetchJournals = () => {
    let url = 'http://localhost:3000/Journals';

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.sessionToken
      })
    })
    .then(response => response.json())
    .then(json => setJournals(json))
    .catch(err => console.log(err))
  }
  console.log(journals)
  useEffect(() => {
    fetchJournals();
  },[createJournal])

  const buttonHandler = () => {
    setCreateJournal(true)
  }

  return (
    <>
    {createJournal ? <CreateJournal setCreateJournal={setCreateJournal} sessionToken={props.sessionToken}/>
    : null}
    {!createJournal ? <button onClick={buttonHandler}>Create AdventureLog!</button>: null}
    
    <table>
      <thead>
        <tr>
          <th>Title of Journals</th>
          <th>Date</th>
          <th>Entry</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <DisplayJournals journals={journals} />
      </tbody>
    </table>
    </>
  )
}

export default Journals;