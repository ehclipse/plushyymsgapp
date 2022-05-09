import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
    <div className={styles.container}>
      <Head>
        <title> Plushyy | Home </title>
        <meta name="keywords" content="plushyys"/>
      </Head>
      <h1>Welcome, {authUser?.email}!!</h1>
      <img src={authUser?.photoURL}/>
      <div className={styles.navBar}>
        <Link href="/chatroom1"><a>Chatroom #1</a></Link>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
    
  )
}
