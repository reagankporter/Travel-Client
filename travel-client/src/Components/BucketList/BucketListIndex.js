import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'reactstrap';
import BucketListCreate from "./BucketListCreate";
import BucketListTable from "./BucketListTable";
import BucketListEdit from "./BucketListEdit";
import './bucketList.css';


const BucketListIndex = (props) => {
    const [bucketList, setBucketList] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [bucketListToUpdate, setBucketListToUpdate] = useState({});

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
            console.log(bucketListData)
        })
        .catch(err => console.log(err))
    }

    const editUpdateBucketList = (bucketList) => {
        setBucketListToUpdate(bucketList);
        console.log(bucketList);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }
    console.log(bucketList);
    useEffect(() => {
        fetchBucketList();
    }, [])

    return (
        <Container>
            <Row>
                <Col md='3'>
                    <BucketListCreate fetchBucketList={fetchBucketList} token={props.token} />
                </Col>
                <Col md='9'>
                    <BucketListTable bucketList={bucketList} editUpdateBucketList={editUpdateBucketList} 
                    updateOn={updateOn} fetchBucketList={fetchBucketList} token={props.token} />
                </Col>
                
                {/* {updateActive ? <BucketListEdit bucketListToUpdate={bucketListToUpdate} id={bucketList.id}
                updateOff={updateOff} token={props.token} fetchBucketList={fetchBucketList} /> : <> </> } */}
            
            </Row>
        </Container>
    )

};

export default BucketListIndex;