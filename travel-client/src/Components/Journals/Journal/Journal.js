import React from 'react';
import './journal.css';

const DisplayJournals = (props) => {
    return(
        <>
        {props.journals.map((journal, key) => {
            return(
                <tr key={key}>
                   <td>{journal.titleOfJournal}</td>
                   <td>{journal.dateOfJournal}</td>
                   <td>{journal.entryOfJournal}</td>
                   <td>{journal.rating}</td>
                </tr>
            )
        })}
        </>
    )
}
export default DisplayJournals