import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";

// images
import Hub from "../../assets/AshburyBook/Hub.png";
import Profile from "../../assets/AshburyBook/Profile.png"

const AshburyBook = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>Ashbury Book</div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    I built the Ashbury Book with the MERN stack to manage the games and statistics of my
                    dorm's poker semi-legal poker league. It does user login with JWTs, features a leaderboard,
                    a schedule of upcoming games, debt tracking and more.
                </div>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/Matthews-House-Poker";
                            }}>
                            Github
                        </div>
                        <div className={styles.website}
                            onClick={() => {
                                window.location.href = "https://ashburybook.netlify.app/";
                            }}>
                            Website
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <img src={Hub} width="500px" alt="not found" />
                <img src={Profile} width="500px" alt="not found" />
            </div>
        </div>
    )
}

export default AshburyBook;