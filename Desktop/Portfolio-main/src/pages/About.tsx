import SideBar from "../components/SideBar";
import styles from "../styles/Template.module.css";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    return (
        <div style={{ height: "100%", display: "flex"}}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>
                    About
                </div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    <p>
                        I'm Alec Dewulf (/&aelig;l&#603;k d&#601;w&#650;lf/) from Sudbury, Ontario, and I'm a freshman at the University of Toronto studying computer science, mathematics, 
                        and statistics at the St. George campus. I like competitive programming, computer vision, and technology which I hope will provide 
                        the grounds for a career in computer science. Most recently, I've been a student at the MIT Research Science Institute where I did visual priming 
                        research at Dr. Wolfe's Visual Attention Lab. I'm a full stack developer expeirenced with MERN, Python, C++, Java and more.
                        Here's my favourite quote:
                    </p>
                    <p>
                        "I certainly would not be famous if I was a Seriphian but neither would you if you were an Athenian." -Themistocles
                    </p>
                </div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    Click <u className={styles.link} onClick={() => { navigate("/resume"); }}>here</u> for my CV
                    and <a className={styles.link} href="https://scholar.google.com/citations?user=TENblEUAAAAJ&hl=en">here</a> for my Google Scholar.
                    
                </div>
                <div style={{ marginBottom: "100px", color: "white", fontSize: "20px" }}>
                    Credits: Aspects of website design courtesy of Vitalik Buterin.
                </div>
            </div>
            <div className={styles.map}>
                <Map />
            </div>
        </div>
    )
}

export default About;