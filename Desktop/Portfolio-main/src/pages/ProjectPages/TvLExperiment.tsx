import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";

// images
import Instructions from "../../assets/TvLExperiment/Instructions.png";
import Experiment from "../../assets/TvLExperiment/Experiment.png";

const TvLExperiment = () => {
    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color:"white", fontSize:"40px" }}>TvL Experiment</div>
                <div style={{ marginBottom: "2rem", color:"white", fontSize: "20px" }}>
                    This application was built as part of my RSI 2021 project on the effects of priming in visual search.
                    Users search for a T among Ls and click the left or right arrow key to specify its orientation. This version
                    of the experiment uses "sharp" and "dotted" Ts. We use it for shape priming. Other versions of the experiment
                    use color and size as priming features. Our results were described in my paper "Effects of Priming on the Deployment of
                    Attention in Visual Search". It was built with React JS and Firebase.
                </div>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/aldew5/TvL-Experiment-Public";
                            }}>
                            Github
                        </div>
                        <div className={styles.website}
                            onClick={() => {
                                window.location.href = "https://tvl-experiment.web.app/";
                            }}>
                            Website
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <img src={Instructions} width="500px" alt="not found" />
                <img src={Experiment} width="500px" alt="not found" />
            </div>
        </div>
    )
}

export default TvLExperiment;