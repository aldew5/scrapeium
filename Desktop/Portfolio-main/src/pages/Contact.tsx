import SideBar from "../components/SideBar";
import styles from "../styles/Template.module.css";
import ProfilePicture from "../assets/profile_picture.jpeg";

const Contact = () => {
    return (
        <div style={{ height: "100%", display: "flex"}}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para2}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>
                    Contact
                </div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    I love working on cool technology and I'm always looking for new projects to be a part of.
                    Please contact me if you have one. I'm also open to questions or even just conversations
                    about interesting things. Send me a email at <b>alec@cisudbury.ca</b>.
                </div>
            </div>
            <div className={styles.profile}>
                <img src={ProfilePicture} alt="profile picture not found" />
            </div>
        </div>
    )
}

export default Contact;