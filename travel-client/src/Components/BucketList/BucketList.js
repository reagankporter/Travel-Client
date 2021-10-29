import React, {useState, useEffect} from 'react';
import './bucketList.css';
import DisplayBucketList from './BucketList/BucketList';
import CreateBucketList from './CreateBucketList/CreateBucketList';

const BucketList = (props) => {
    console.log(props);
    const [bucketList, setBucketList] = useState([]);
    const [createBucketList, setCreateBucketList] = useState(false);


    const fetchBucketList = () => {
        let url = 'http://localhost:3000/bucketlist';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(response => response.json())
        .then(json => setBucketList(json))
        .catch(err => console.log(err))
    }
    console.log(bucketList);
    useEffect(() => {
        fetchBucketList();
    }, [createBucketList])

    const buttonHandler = () => {
        setCreateBucketList(true)
    }

    return (
        <>
        {createBucketList ? <CreateBucketList setCreateBucketList={setCreateBucketList} sessionToken={props.sessionToken} />
        : null}
        {!createBucketList ? <button onClick={buttonHandler}>Submit Bucket List Item!</button>: null}
        
        <table>
            <thead>
                <tr>
                    <th>Name of Place</th>
                    <th>Location of Place</th>
                    <th>Event of Interest</th>
                    <th>This is a Bucket List Item Because:</th>
                </tr>
            </thead>
            <tbody>
                <DisplayBucketList bucketList={bucketList} />
            </tbody>

        </table>
        </>
    )

};

export default BucketList;