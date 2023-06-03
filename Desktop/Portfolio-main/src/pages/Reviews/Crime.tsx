import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Farm = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>Crime and Punishment</i> by Fyodor Dostoevsky
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    August 15, 2021
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

export default Farm;
