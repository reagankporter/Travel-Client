import React, {useState, useEffect} from "react";

import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import BucketListCreate from "./BucketListCreate";
import BucketListTable from "./BucketListTable";
import BucketListEdit from "./BucketListEdit";


const BucketListIndex = (props) => {
    const [bucketList, setBucketList] = useState([]);
    const [updateActive, setUpdatActive] = useState(false);
    const [bucketListToUpdate, setBucketListToUpdate] = useState({});

    const fetchBucketList = () => {
        fetch('http://localhost:3000/buckelist', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((bucketlistData) => {
            setBucketList(bucketlistData)
            console.log(bucketlistData)
        })
        .catch(err => console.log(err))
    }

    const editUpdateBucketList = (bucketList) => {
        setBucketListToUpdate(bucketList);
        console.log(bucketList);
    }

    const updateOn = () => {
        setUpdatActive(true);
    }

    const updateOff = () => {
        setUpdatActive(false);
    }

    useEffect(() => {
        fetchBucketList();
    }, [])

    return (
        <div>
            <CardGroup>
                <Card>
                    <BucketListCreate fetchBucketList={fetchBucketList} token={props.sessionToken} />
                </Card>
                <Card>
                    <BucketListTable bucketList={bucketList} editUpdateBucketList={editUpdateBucketList} 
                    updateOn={updateOn} fetchBucketList={fetchBucketList} token={props.sessionToken} />
                </Card>
                {updateActive ? <BucketListEdit bucketListToUpdate={bucketListToUpdate}
                updateOff={updateOff} token={props.sessionToken} fetchBucketList={fetchBucketList} /> : <> </> }
                <Card>
                    <CardImg src='' alt='' />
                    <CardBody>
                        <CardTitle>
                            Card Title
                        </CardTitle>
                        <CardSubtitle>
                            Card Subtitle
                        </CardSubtitle>
                        <CardText>
                            Card Text Goes Here
                        </CardText>
                        <Button>Edit</Button>   
                        <Button>Delete</Button> 
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )

};

export default BucketListIndex;