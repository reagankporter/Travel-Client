import React from 'react';
import {Table, Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import BucketListEdit from './BucketListEdit';

const BucketListTable = (props) => {

    const deleteBucketList = (bucketList) => {
        fetch(`http://localhost:3000/bucketList/delete/${bucketList.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchBucketList())
    }

    const bucketListMapper = () => {
        return props.bucketList.map((bucketList, index) => {
            return (
                <div>
                    
                    <tr key={index}>

                        <Card>
                            <CardBody>
                                <CardTitle>{bucketList.nameOfPlace}</CardTitle>
                                <CardSubtitle>{bucketList.locationOfPlace}</CardSubtitle>
                                <CardText>{bucketList.eventInPlace} <br/> {bucketList.whyAdded}</CardText>
                                <td>
                                    <BucketListEdit token={props.token} bucketListToUpdate={bucketList}/>
                                    {/* <Button onClick={() => {props.editUpdateBucketList(); props.updateOn()}}>Edit</Button>    */}
                                    <Button onClick={() => {deleteBucketList(bucketList)}}>Delete</Button> 
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
            <h3>Bucket List</h3>
            <hr />
            <Table striped>
                <tbody>
                    {bucketListMapper()}
                </tbody>
            </Table>
        </div>
    )
}

export default BucketListTable;