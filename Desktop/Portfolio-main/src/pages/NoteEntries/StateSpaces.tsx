import File1 from "../../assets/Notes/3.1_quantum_state_spaces-images/0001.jpg";
import File2 from "../../assets/Notes/3.1_quantum_state_spaces-images/0002.jpg";
import File3 from "../../assets/Notes/3.1_quantum_state_spaces-images/0003.jpg";
import File4 from "../../assets/Notes/3.1_quantum_state_spaces-images/0004.jpg";
import File5 from "../../assets/Notes/3.1_quantum_state_spaces-images/0005.jpg";
import File6 from "../../assets/Notes/3.1_quantum_state_spaces-images/0006.jpg";

import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const StateSpaces = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Quantum State Spaces
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    April 24, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/notes") }}>
                    See all posts
                </div>
            </div>
            <div className={styles.notes}>
                <img src={File1} width="900px" alt="not found" />
                <img src={File2} width="900px" alt="not found" />
                <img src={File3} width="900px" alt="not found" />
                <img src={File4} width="900px" alt="not found" />
                <img src={File5} width="900px" alt="not found" />
                <img src={File6} width="900px" alt="not found" />
            </div>
        </div>

    )
}

export default StateSpaces;