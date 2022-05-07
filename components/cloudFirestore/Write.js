import firebase from '../../firebase/initFirebase';
import 'firebase/compat/firestore';


const WriteToCloudFirestore = () => {
    
    const sendData = () => {
        try{
            // send data
            firebase
                .firestore()
                .collection('myCollection')
                .doc('my_document')
                .set({
                    name: 'flop'
                })
        } catch (error){
            console.log(error);
        }
    }
    return (
        <button onClick={sendData}>Write Data</button>
    )

}
 
export default WriteToCloudFirestore;