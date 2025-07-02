import styles from './page.module.css';
import MyLink from '../ui/my_link';
export default function About() {
    return (
        <div className={styles.main}>
            <h1 >about page</h1>
            <MyLink />
        </div>
    )
}