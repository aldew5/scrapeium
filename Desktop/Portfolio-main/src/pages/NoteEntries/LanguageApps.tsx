import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const LanguageApps = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Language Applications
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
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQQ4HI97brD8-RsH0udl9Pb7dU_DRJjjZlyxD_jm_pcQAmA9DFsT3AZE0m2KEcKgLpMwofBU423Ht--/pub?embedded=true"
                width="800px" height="700px" frameBorder="0" />
        </div>

    )
}

export default LanguageApps;
