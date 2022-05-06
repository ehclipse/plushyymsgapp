import Link from 'next/link';
import styles from "../styles/404.module.css";
import bobaCat from "../images/bobacat.gif";
import Image from 'next/image';

const NotFound = () => {
    return (  
        <div className={styles.container}>
            <h1 className={styles.text}>oop</h1>
            <Image className={styles.bobaCat} src={bobaCat} alt="" width={400} height={500}/>
            <h2>The page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a className={styles.link} >Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;