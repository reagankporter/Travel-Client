import React, {useState} from 'react';
import './createJournal.css';

const CreateJournals = () => {
  const [titleOfJournal, setTitleOfJournal] = useState('');
  const [dateOfJournal, setDateOfJournal] = useState(0);
  const [entry, setEntry] = useState('');
  const [rating, setRating] = useState(0);
  return(
      <form>
       <input type='text'onChange={(e) =>setTitleOfJournal(e.target.value)} value={titleOfJournal}placeholder='Title'/>
       <input type='number'onChange={(e) =>setDateOfJournal(e.target.value)} value={dateOfJournal}placeholder='Date of Trip'/>
       <input type='text'onChange={(e) =>setEntry(e.target.value)} value={entry}placeholder='Place Adventures Here'/>
       <input type='number'onChange={(e) =>setRating(e.target.value)} value={rating}placeholder=''/>
       <button type='submit'>Submit</button>
      </form>
  )
}
export default CreateJournals