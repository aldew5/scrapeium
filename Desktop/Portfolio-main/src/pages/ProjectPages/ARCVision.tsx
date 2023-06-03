import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";

// images
import Menu from "../../assets/ARCVision/Menu.png";
import Demo from "../../assets/ARCVision/Demo.png";

const ARCVision = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>ARCVision</div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    ARCVision is an application built with Python3 and OpenCV that allows users to program
                    binary ArUco markers and see the results in augmented reality. It was built as an educational
                    tool to teach young people about programming (sort of like a real-world Scratch).
                </div>
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