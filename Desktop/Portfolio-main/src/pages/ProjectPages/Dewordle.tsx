import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";
import { Typography } from "@mui/material";

// images
import Game from "../../assets/Dewordle/dewordle.png";

const Deworlde = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
                <SideBar />
            </div>
            <div className={styles.para}>
                <Typography variant="h4" color="white" style={{ marginBottom: "2rem" }}>Dewordle</Typography>
                <Typography variant="h6" color="white" style={{ marginBottom: "2rem" }}>
                    Dewordle is a game I made for my school. It's like Wordle, but instead of using
                    the boring set of words found in a dictionary, it uses names of my friends, buildings,
                    and even made up words.  We've had a lot more fun playing this than the real Wordle.
                    It was build with React JS and Typescript.
                </Typography>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/aldew5/Dewordle";
                            }}>
                            Github
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <div style={{ display: "table-row" }}>
                    <div style={{ display: "table-cell", width: "500px" }}>
                        <img src={Game} width="300px" alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deworlde;