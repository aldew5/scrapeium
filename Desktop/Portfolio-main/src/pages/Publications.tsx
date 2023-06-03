import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Title from "../components/BlogsAndNotes/Title";
import styles from "../styles/BlogsAndNotes.module.css";

const Publications = () => {

    return (
        <div style={{ height: "800px", display: 'flex' }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.title}>
                <div>
                    <Typography variant="h4" color="white"
                        style={{
                            marginBottom: "2rem",
                        }}>
                        Alec Dewulf's Publications
                    </Typography>
                    <Typography variant="body1" color="white"
                        style={{
                            marginBottom: "1rem",
                        }}>
                        "All we can know is that we know nothing. And that is the height of human wisdom."
                        - Leo Tolstoy
                    </Typography>
                </div>
                <div >
                    <hr />
                </div>
                <div className={styles.blogs}>
                    <Title
                        date={"May 24, 2022"}
                        text={"Priming in Inefficient Visual Search: Real, but Transient"}
                        title={"transient"}
                        small={false}
                    />
                </div>
                <div className={styles.blogs}>
                    <Title
                        date={"September 26, 2022"}
                        text={"A Recap of Apple's Most Recent Keynote Event"}
                        title={"apple"}
                        small={false}
                    />
                </div>
                <div className={styles.blogs}>
                    <Title
                        date={"October 6, 2022"}
                        text={"Book Review: How Not to be Wrong"}
                        title={"howWrong"}
                        small={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Publications;