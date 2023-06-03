import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Cities = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>A Tale of Two Cities</i> by Charles Dickens
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    June 20, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Review Pending.
                        </p>
                        <p>Rating: 5/5</p>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Cities;
