import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";

// images
import Game from "../../assets/FallingBlocks/Game.png";

const FallingBlocks = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>Falling Blocks</div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    Falling Blocks is a game I made with Python3 and Pygame after watching Tech with Tim's tutorial
                    series on the library. The objective is to move your character left and ride to avoid the
                    stuff falling from the sky.  There are also powerups, guns and other things to help you along the way.
                </div>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/aldew5/Falling-Blocks";
                            }}>
                            Github
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <img src={Game} width="500px" alt="not found" />
            </div>
        </div>
    )
}

export default FallingBlocks;