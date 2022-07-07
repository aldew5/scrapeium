import File1 from "../../assets/Notes/3_Spatial_Vision_Research_Without_Noise/001.png";
import File2 from "../../assets/Notes/3_Spatial_Vision_Research_Without_Noise/002.png";
import File3 from "../../assets/Notes/3_Spatial_Vision_Research_Without_Noise/003.png";
import File4 from "../../assets/Notes/3_Spatial_Vision_Research_Without_Noise/004.png";
import File5 from "../../assets/Notes/3_Spatial_Vision_Research_Without_Noise/005.png";
import File6 from "../../assets/Notes/3_Spatial_Vision_Research_Without_Noise/006.png";

import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const SpatialVision = () => {

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
                <img src={File4} width="900px" alt="not found" />
                <img src={File5} width="900px" alt="not found" />
                <img src={File6} width="900px" alt="not found" />
            </div>
        </div>

    )
}

export default SpatialVision;
