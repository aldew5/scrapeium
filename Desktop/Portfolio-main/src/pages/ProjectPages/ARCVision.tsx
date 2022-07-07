import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";
import { Typography } from "@mui/material";

// images
import Menu from "../../assets/ARCVision/Menu.png";
import Demo from "../../assets/ARCVision/Demo.png";

const ARCVision = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
                <SideBar />
            </div>
            <div className={styles.para}>
                <Typography variant="h4" color="white" style={{ marginBottom: "2rem" }}>ARCVision</Typography>
                <Typography variant="h6" color="white" style={{ marginBottom: "2rem" }}>
                    ARCVision is an application built with Python3 and OpenCV that allows users to program
                    binary ArUco markers and see the results in augmented reality. It was built as an educational
                    tool to teach young people about programming (sort of like a real-world Scratch).
                </Typography>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/aldew5/ARCVision";
                            }}>
                            Github
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <div style={{ display: "table-row" }}>
                    <div style={{ display: "table-cell", width: "500px" }}>
                        <img src={Menu} width="300px" alt="not found" />
                    </div>
                    <div style={{ display: "table-cell" }}>
                        <img src={Demo} width="300px" alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ARCVision;