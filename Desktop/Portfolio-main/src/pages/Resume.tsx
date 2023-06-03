import File1 from "../assets/Resume/001.png";
import File2 from "../assets/Resume/002.png";
import File3 from "../assets/Resume/003.png";


import styles from "../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const Resume = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Curriculum vitae
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    June 12, 2022
                </div>
                <div className={styles.link2} onClick={() => { navigate("/about") }}>
                    Return to about
                </div>
            </div>
            <div className={styles.notes}>
                <img src={File1} width="900px" alt="not found" />
                <img src={File2} width="900px" alt="not found" />
                <img src={File3} width="900px" alt="not found" />
            </div>
        </div>

    )
}

export default Resume;
