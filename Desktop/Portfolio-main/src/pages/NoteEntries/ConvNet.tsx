import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";

const ConvNet = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Convolutional Neural Networks
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
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTtVKIw89_6479sgDfKVMv5s8g1K9MvV-zBSDxMXGJo-we0p_26LgeLooBl2-rGt_Bnzolp5L2Eqa-2/pub?embedded=true"
                width="800px" height="700px" frameBorder="0" />
        </div>

    )
}

export default ConvNet;
