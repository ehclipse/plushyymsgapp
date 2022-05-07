import { useAuth } from '../context/AuthUserContext';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



const Auth = () => {

    const router = useRouter();
    const {signInWithGoogle, authUser, loading} = useAuth();

    useEffect(() => {
        if(!loading && authUser)
          router.push('/');
    },[authUser, loading])

    return ( 
        <div>
            <Head>
                <title> Plushyy | Login </title>
                <meta name="keywords" content="plushyys"/>
            </Head>
            <p>Login PLS</p>
            <button onClick={signInWithGoogle}> Sign in with Google</button>
        </div>
    );
}
 
export default Auth;