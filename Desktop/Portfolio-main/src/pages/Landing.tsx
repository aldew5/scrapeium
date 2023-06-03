import { Typography } from "@mui/material";
import styles from "../styles/Landing.module.css";
import Particle from "../components/Particle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const Landing = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Particle />
            <div style={{ margin: "auto", width: "500px", marginTop: "14rem" }}>
                <Typography variant="h1" color="white"
                    className={styles.title}
                    fontFamily='-apple-system'>
                    Alec Dewulf
                </Typography>
                <div style={{ marginTop: "1rem" }}>
                    <div className={styles.project}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => { navigate("/profile") }}
                        >
                            Projects
                        </Button>
                    </div>
                    <div className={styles.blog}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => { navigate("/publications") }}
                        >
                            Publications
                        </Button>
                    </div>
                    <div className={styles.blog}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => { navigate("/about") }}
                        >
                            About
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;