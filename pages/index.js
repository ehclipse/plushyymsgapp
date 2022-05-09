import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WriteToCloudFirestore from '../components/cloudFirestore/Write'
import ReadToCloudFirestore from '../components/cloudFirestore/Read'
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';


export default function Home() {
  const router = useRouter();
  const {authUser, loading, signOut} = useAuth();

  useEffect(() => {
    if(!authUser)
      router.push('/auth');
  },[authUser])

  return (
    <>
      <Head>
        <title> Plushyy | Home </title>
        <meta name="keywords" content="plushyys"/>
      </Head>
      <div>
        <h1>Welcome, {authUser?.email}!!</h1>
        <img src={authUser?.photoURL}/>
      </div>
      {/*<WriteToCloudFirestore/>
      <ReadToCloudFirestore/>*/}
      <Link href="/chatroom1"><a>Chatroom #1</a></Link>
      <button onClick={signOut}>Sign Out</button>
    </>
    
  )
}
