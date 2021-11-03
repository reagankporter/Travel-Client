import React from 'react';
import {Table} from 'reactstrap';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const BucketListTable = (props) => {

    const deleteBucketList = (bucketList) => {
        fetch(`http://localhost:3000/buckelist/${bucketList.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetchBucketList())
    }

    // const bucketListMapper = () => {
    //     return props.bucketList.map((bucketList, index) => {
            return (
                <div>
                    <h3>Bucket List</h3>
                    <hr />
                    <Card>
                        <CardBody>
                            <CardTitle>bucketList.nameOfPlace</CardTitle>
                            <CardSubtitle>bucketList.locationOfPlace</CardSubtitle>
                            <CardText>bucketList.eventInPlacet</CardText>
                            <CardText>bucketList.whyAdded</CardText>
                            <Button onClick={() => {props.editUpdateBucketList(); props.updateOn()}}>Edit</Button>   
                            <Button onClick={() => {deleteBucketList()}}>Delete</Button> 
                        </CardBody>
                    </Card>
                </div>
            )

    //     })
    // }
}

export default BucketListTable;