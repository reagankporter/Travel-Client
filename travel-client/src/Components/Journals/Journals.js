import React, {useState, useEffect} from 'react';
import './journals.css';
import DisplayJournals from './Journal/Journal';
import CreateJournal from './CreateJournal/CreateJournal';

const Journals = (props) => {
  console.log(props.token)
  const [journals, setJournals] = useState([]);
  const [createJournal, setCreateJournal] = useState(false);

  const fetchJournals = (props) => {
    let url = 'http://localhost:3001/journals/mine';

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      })
    })
    .then(response => response.json())
    .then(json => setJournals(json))
    .catch(err => console.log(err))
  }
  console.log(journals)
  // useEffect(() => {
  //   fetchJournals();
  // },[])
  const buttonHandlerf = () => {
    fetchJournals(true)
  }
  const buttonHandler = () => {
    setCreateJournal(true)
  }

  return (
    <>
    {createJournal ? <CreateJournal setCreateJournal={setCreateJournal} token={props.token}/>
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