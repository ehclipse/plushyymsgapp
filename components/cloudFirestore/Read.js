import firebase from '../../firebase/initFirebase'
import 'firebase/compat/firestore';

const ReadToCloudFirestore = () => {
    
    const readData = () => {
        try {
            firebase
                .firestore()
                .collection('myCollection')
                .doc('my_document')
                .onSnapshot((doc) => {
                    console.log(doc.data())
                })
        } catch(error){
            console.log(error);
        }
    }

    return (
        <button onClick={readData}>Read Data</button>
    )

}
 
export default ReadToCloudFirestore;