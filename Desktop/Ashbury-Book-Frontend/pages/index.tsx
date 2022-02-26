import type { NextPage } from "next";
import  { Login } from "../components/login";
import styles from "@styles/landing.module.css";

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.title}>The Ashbury Book</h1>
                {/* <Login /> */}
                < Login /> 
                <br />
                <div className={styles.explanation}>
                    Ashbury Book was made by students for students. It is a
                    central hub for everything Ashbury. Post and read about
                    classes, parties, events and everything else that goes on at
                    the school. No teachers allowed.
                </div>
            </div>
        </>
    );
};

export default Home;
