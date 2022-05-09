import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef } from 'react';
import WriteToCloudFirestore from '../components/cloudFirestore/FirestoreHandler';
import {useAuth} from '../context/AuthUserContext';
import styles from '../styles/chatroom.module.css';
import Image from 'next/image';
import Firebase from '../firebase/initFirebase';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import defaultAvatar from '../public/images/defaultbobacat.gif';

const ChatRoom = () => {
    const dummy = useRef();
    const {authUser} = useAuth();
    const [formValue, setFormValue] = useState('');

    const db = Firebase.firestore();
    
    // collection reference
    const colRef = db.collection('messages');

    // get the Messages
    const query = colRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});


    const sendMessage = async (e) =>{
        e.preventDefault();
        await WriteToCloudFirestore('messages', formValue, authUser.uid, authUser.photoURL);

        setFormValue('');
        dummy.current.scrollIntoView({behavior: 'smooth'});
    }

    return ( 
        <div className={styles.chatroom}>
            <Head>
                <title> Plushyy | Chatroom #1 </title>
                <meta name="keywords" content="plushyys"/>
            </Head>
            <p>ChatRoom #1 </p>
            <div className={`${styles.msgsContainer} ${styles.scroller}`}>
                {
                    messages && messages.map((message) => {
                        console.log(message);
                        return <div className={`${styles.msg} ${authUser.uid !== message.uid ? styles.receive : styles.send}`} id={message.id}>
                                    {authUser.uid !== message.uid ? <Image className={styles.avatar} src={message.photoURL || defaultAvatar} width={40} height={40}/> : null}
                                    <p className={`${styles.msgText} `}>{message.text}</p>
                                </div>
                    })
                }
                <span ref={dummy}></span>
            </div>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="send message"/>
                <button type="submit" disabled={!formValue}>🧸</button>
            </form>
            <Link href="/"><a>Go Home</a></Link>
        </div>
        
     );
}
 
export default ChatRoom;