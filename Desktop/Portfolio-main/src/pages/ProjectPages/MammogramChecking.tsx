import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";

// images
import Trial from "../../assets/MammogramChecking/trial.png";

const MammogramChecking = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>Mammogram Checking</div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                This app is part of my internship at the HMS/BWH Visual Attention Lab. It will be used to test 
                radiologists' confidence in allowing AI to be integrated into the mammogram screening procedure. 
                Radiologists are shown an MLO mammogram and are asked to rate its suspiciousness on a scale from 
                1 to 10. A rating of 10 would mean the radiologist is certain there is a cancer present and the 
                patient should be recalled. The radiologist is then shown the AI's rating of the image and asked 
                how confident they are in allowing the AI to make this decision based on this particular rating.
                </div>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/aldew5/Mammogram-Checking";
                            }}>
                            Github
                        </div>
                        <div className={styles.website}
                            onClick={() => {
                                window.location.href = "https://mammogram-checking.netlify.app/";
                            }}>
                            Website
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <img src={Trial} width="500px" alt="not found" />
            </div>
        </div>
    )
}

export default MammogramChecking;
