import { Typography } from "@mui/material";
import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const Admissions = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                U.S. Admissinos for International Students is a Game of Privilege
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                </div>
                <div className={styles.link} onClick={() => { navigate("/blog") }}>
                    See all posts
                </div>
            </div>
            <div className={styles.body}>
                <Typography variant="body1">

                </Typography>
            </div>
        </div>
    )
}

export default Admissions;