import React, {useState} from 'react';
import { Table, Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardGroup } from 'reactstrap';
import BucketListEdit from './BucketListEdit';

const BucketListTable = (props) => {
    const [bucketList, setBucketList] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);

    const deleteBucketList = (bucketList) => {
        fetch(`http://localhost:3000/bucketList/delete/${bucketList.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
            .then(() => props.fetchBucketList())
    }

    const fetchBucketList = () => {
        fetch('http://localhost:3000/bucketlist/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then((res) => res.json())
        .then((bucketListData) => {
            setBucketList(bucketListData)
        })
        .catch((err) => console.log(err))
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const bucketListMapper = () => {
        return props.bucketList.map((bucketList, index) => {
            return (
                <div>
                    <CardGroup>
                    <tr key={index}>

                        <Card>
                            <CardBody>
                                <CardTitle tag='h3'>Place: {bucketList.nameOfPlace}</CardTitle>
                                <hr/>
                                <CardSubtitle className='mb-2 text-muted' tag='h4'>Location: {bucketList.locationOfPlace}</CardSubtitle>
                                <CardText>Event: {bucketList.eventInPlace}</CardText>
                                <CardText>Why: {bucketList.whyAdded}</CardText>
                                <td>
                                    <BucketListEdit updateOff={updateOff} token={props.token} fetchBucketList={fetchBucketList} bucketListToUpdate={bucketList} />
                                    <Button onClick={() => { deleteBucketList(bucketList) }}>Delete</Button>
                                </td>
                            </CardBody>
                        </Card>

                    </tr>
                    </CardGroup>
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