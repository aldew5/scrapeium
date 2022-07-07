import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import styles from "../styles/Template.module.css";
import Map from "../components/Map";

const About = () => {
    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
                <SideBar />
            </div>
            <div className={styles.para}>
                <Typography variant="h4" color="white" style={{ marginBottom: "2rem" }}>About</Typography>
                <Typography variant="h6" color="white">
                    I'm Alec Dewulf from Sudbury, Ontario, and I'm currently a Senior at Ashbury College. I like
                    competitive programming, machine learning, and technology which I hope will provide the grounds for a career
                    in computer science. Most recently, I've been a student at the Research Science Institute where I did visual priming research
                    at Dr. Wolfe's Visual Attention Lab. I'm a full stack developer expeirenced with MERN, Python, C++, Java and more.
                </Typography>
            </div>
            <div className={styles.map}>
                <Map />
            </div>
        </div>
    )
}

export default About;