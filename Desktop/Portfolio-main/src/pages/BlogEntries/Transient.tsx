import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";
import File1 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-01.png";
import File2 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-02.png";
import File3 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-03.png";
import File4 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-04.png";
import File5 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-05.png";
import File6 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-06.png";
import File7 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-07.png";
import File8 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-08.png";
import File9 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-09.png";
import File10 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-10.png";
import File11 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-11.png";
import File12 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-12.png";
import File13 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-13.png";
import File14 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-14.png";
import File15 from "../../assets/Notes/PrimingInSearchAPP2022/PrimingInSearchAPP2022-15.png";

const Transient = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Priming in Inefficient Visual Search: Real, but Transient
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    May 24, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/blog") }}>
                    See all posts
                </div>
            </div>
            <div className={styles.body}>
                <img src={File1} width="900px" alt="not found" />
                <img src={File2} width="900px" alt="not found" />
                <img src={File3} width="900px" alt="not found" />
                <img src={File4} width="900px" alt="not found" />
                <img src={File5} width="900px" alt="not found" />
                <img src={File6} width="900px" alt="not found" />
                <img src={File7} width="900px" alt="not found" />
                <img src={File8} width="900px" alt="not found" />
                <img src={File9} width="900px" alt="not found" />
                <img src={File10} width="900px" alt="not found" />
                <img src={File11} width="900px" alt="not found" />
                <img src={File12} width="900px" alt="not found" />
                <img src={File13} width="900px" alt="not found" />
                <img src={File14} width="900px" alt="not found" />
                <img src={File15} width="900px" alt="not found" />
            </div>
        </div>
    )
}

export default Transient;