import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import styles from "../styles/Template.module.css";
import ProfilePicture from "../assets/profile_picture.jpeg";

const Contact = () => {
    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
                <SideBar />
            </div>
            <div className={styles.para2}>
                <Typography variant="h4" color="white" style={{ marginBottom: "2rem" }}>Contact</Typography>
                <Typography variant="h6" color="white">
                    I love working on cool technology and I'm always looking for new projects to be a part of.
                    Please contact me if you have one. I'm also open to questions or even just conversations
                    about interesting things. Send me a email at <b>alec@cisudbury.ca</b>.
                </Typography>
            </div>
            <div className={styles.profile}>
                <img src={ProfilePicture} alt="profile picture not found" />
            </div>
        </div>
    )
}

export default Contact;