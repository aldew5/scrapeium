import Login from "../components/Login";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div>
            <h1 className={styles.title}>The Ashbury Book</h1>
            <Login/>
            <br/>
            <div className={styles.explanation}>
                Ashbury Book was made by students for students. It is a central hub for everything Ashbury.
                Post and read about classes, parties, events and everything else that goes on at the school.
                No teachers allowed.
            </div>
        </div>
    );
}

export default Landing;