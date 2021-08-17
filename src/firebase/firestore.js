import {db, auth} from './base'
import {useState, useEffect} from 'react'

const Firestore = () => {
    const [fireUsers, setFireUsers] = useState([]);
    db.collection('users')
        .get()
        .then(snapshot => {
            const users = []
            snapshot.docs.forEach(doc => {
                const data = doc.data().data[0].category
                users.push(data)
            })
            setFireUsers(users)
        })
        .catch(error => {
            console.log(error)
        })
    return (
        <>
            <h1>Firestore</h1>
            <h1>{fireUsers}</h1>
        </>
    )
}


export default Firestore;