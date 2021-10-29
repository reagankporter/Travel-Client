import React from 'react';
import './bucketList.css';

const DisplayBucketList = (props) => {
    return(
        <>
        {props.bucketList.map((item, key) => {
            return(
                <tr key={key}>
                    <td>{item.nameOfPlace}</td>
                    <td>{item.locationOfPlace}</td>
                    <td>{item.eventInPlace}</td>
                    <td>{item.whyAdded}</td>
                </tr>
            )
        })}
        </>
    )
};

export default DisplayBucketList;