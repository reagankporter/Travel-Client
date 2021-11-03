import React from 'react';
import {Table, Button} from 'reactstrap';

const BucketListTable = (props) => {

    const deleteBucketList = (bucketList) => {
        fetch(`http://localhost:3000/bucketlist/${bucketList.id}`, {
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
                    <h3>Bucket List</h3>
                    <hr />
                    <tr key={index}>
                        <th scope='row'>{bucketList.id}</th>
                        <td>{bucketList.nameOfPlace}</td>
                        <td>{bucketList.locationOfPlace}</td>
                        <td>{bucketList.eventInPlacet}</td>
                        <td>{bucketList.whyAdded}</td>
                        <td>
                            <Button onClick={() => {props.editUpdateBucketList(); props.updateOn()}}>Edit</Button>   
                            <Button onClick={() => {deleteBucketList()}}>Delete</Button> 
                        </td>
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
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name of Place</th>
                        <th>Location</th>
                        <th>Event of Interest</th>
                        <th>Why</th>
                    </tr>
                </thead>
                <tbody>
                    {bucketListMapper()}
                </tbody>
            </Table>
        </div>
    )
}

export default BucketListTable;