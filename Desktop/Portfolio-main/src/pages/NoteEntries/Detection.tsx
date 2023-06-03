import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";


const Detection = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                    Detection Algorithms
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    June 20, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/notes") }}>
                    See all posts
                </div>
            </div>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTkJ8SkZDwfR1yMkk5ul3I_GuQ30QDLdfZOERD_8TFeMl0rKMhtIhvc6aJJi2MJiHFnGD-NWM_pyIZh/pub?embedded=true"
                width="800px" height="700px" frameBorder="0"/>
        </div>
    )
}

export default Detection;