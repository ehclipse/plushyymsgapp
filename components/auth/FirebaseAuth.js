import Firebase from '../../firebase/initFirebase';
import {useState, useEffect} from 'react';



const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL
  });
  
export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const authStateChanged = async (authState) => {
      if (!authState) {
        setAuthUser(null)
        setLoading(false)
        return;
      }
  
      setLoading(true)
      var formattedUser = formatAuthUser(authState);
      setAuthUser(formattedUser);    
      setLoading(false);
    };

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
      };
    
    const signInWithEmailAndPassword = (email, password) =>
    Firebase.auth().signInWithEmailAndPassword(email, password);

    const createUserWithEmailAndPassword = (email, password) =>
    Firebase.auth().createUserWithEmailAndPassword(email, password);

    const signOut = () =>
    Firebase.auth().signOut().then(clear);

    const signInWithGoogle = () => {
        const provider = new Firebase.auth.GoogleAuthProvider();
        Firebase.auth().signInWithPopup(provider);
    }
  
    // listen for Firebase state change
    useEffect(() => {
      const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
      return () => unsubscribe();
    }, []);
  
    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        signInWithGoogle
    };
}







/*
const auth = firebase.auth();

const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={signInWithGoogle}> Sign in with Google</button>
    )
}


const SignOut = () => {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}





const FirebaseAuth = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            {
                user ?  
                    <>
                        <img src={auth.currentUser.photoURL} height={100} width={100} />
                        <SignOut/> 
                    </> 
                    :<SignIn/>
            }
            
        </div>
    )
}
 
export default FirebaseAuth;*/