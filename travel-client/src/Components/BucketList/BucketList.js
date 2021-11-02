import React, {useState, useEffect} from 'react';
import './bucketList.css';
import GetBucketList from './GetBucketList/GetBucketList';
import DisplayBucketList from './DisplayBucketList/DisplayBucketList';
import CreateBucketList from './CreateBucketList/CreateBucketList';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const BucketList = (props) => {

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



    // console.log(props);
    // const [bucketList, setBucketList] = useState([]);
    // const [createBucketList, setCreateBucketList] = useState(false);


    // const fetchBucketList = () => {
    //     let url = 'http://localhost:3000/bucketlist';

    //     fetch(url, {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.sessionToken
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(json => setBucketList(json))
    //     .catch(err => console.log(err))
    // }
    // console.log(bucketList);
    // useEffect(() => {
    //     fetchBucketList();
    // }, [createBucketList])

    // const buttonHandler = () => {
    //     setCreateBucketList(true)
    // }

    // return (
    //     <div className='main'>
    //         <div className='mainDiv'>

    //             {createBucketList ? <CreateBucketList setCreateBucketList={setCreateBucketList} sessionToken={props.sessionToken} />
    //             : null}
    //             {!createBucketList ? <button onClick={buttonHandler}>Create Bucket List Item!</button>: null}

    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th>Name of Place</th>
    //                         <th>Location of Place</th>
    //                         <th>Event of Interest</th>
    //                         <th>This is a Bucket List Item Because:</th>
    //                     </tr>
    //                 </thead>
    //         <tbody>
    //             <DisplayBucketList bucketList={bucketList} />
    //         </tbody>

    //     </table>

    //             <div className='card'>
    //                 <img className='card-img' /> 
    //                 <div className='card-body'>
    //                     <DisplayBucketList bucketList={bucketList} />
    //                     <h2 className='card-title'>nameOfPlace</h2>
    //                     <h3 className='card-subtitle'>locationOfPlace</h3>
    //                     <h3 className='card-subtitle'>eventOfInterest</h3>
    //                     <p className='card-description'>whyAdded</p>
    //                     <button className='placeLink'>Show Place</button>
    //                 </div>
    //             </div> 


    //         </div>
    //     </div>
    // )

};

export default BucketList;