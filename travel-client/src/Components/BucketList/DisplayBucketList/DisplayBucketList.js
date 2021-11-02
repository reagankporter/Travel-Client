import React from 'react';
import './DisplayBucketList';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const DisplayBucketList = (props) => {
    
    return(
        <div>
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
        </div>
    )
};

export default DisplayBucketList;