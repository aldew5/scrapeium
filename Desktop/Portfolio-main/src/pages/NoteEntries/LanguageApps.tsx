import File1 from "../../assets/Notes/Language_Applications1/001.png";
import File2 from "../../assets/Notes/Language_Applications1/002.png";
import File3 from "../../assets/Notes/Language_Applications1/003.png";

import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const LanguageApps = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Single-Qubit Quantum Systems
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    April 14, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/notes") }}>
                    See all posts
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

export default LanguageApps;
