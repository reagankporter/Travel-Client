import React, { useEffect, useState } from "react";
import './getBucketList.css';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const GetBucketList = (props) => {
    const [bucketList, setBucketList] = useState([]);

    const fetchBucketList = () => {
        fetch('http://localhost:3000/bucketlist', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((bucketlistData) => {
            setBucketList(bucketlistData)
            console.log(bucketlistData)
        })
    }

    useEffect(() => {
        fetchBucketList();
    }, [])

    return (
        <div>
            <CardGroup>
                <Card>
                    <CardImg src='' alt='' />
                    <CardBody>
                        <CardTitle>
                            Card title
                        </CardTitle>
                        <CardSubtitle>
                            Card subtitle
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

export default GetBucketList;