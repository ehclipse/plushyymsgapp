import firebase from '../../firebase/initFirebase'
import 'firebase/compat/firestore';
/*
const ReadFromCloudFirestore = () => {
    let messages = [];

    try {
        firebase
            .firestore()
            .collection('myCollection')
            .onSnapshot((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    messages.push(doc)
                })
                console.log(messages);
            }) // Snapshot will fire everytime there is change in the collection
    } catch(error){
        console.log(error);
    }


    return (
       messages
    )

}*/
 

const WriteToCloudFirestore = async (collection, text, uid, photoURL) => {

    const data = {
        text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
    }
    try{
        // send data
        await firebase
            .firestore()
            .collection(collection)
            .add(data);
    } catch (error){
        console.log(error);
    }
}
 

export default WriteToCloudFirestore;