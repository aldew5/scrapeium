import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Menu from "../components/BlogsAndNotes/Menu";
import Title from "../components/BlogsAndNotes/Title";
import styles from "../styles/BlogsAndNotes.module.css";
import { useState } from "react";

const Notes = () => {

    const [science, setScience] = useState<boolean>(true);
    const [scifi, setScifi] = useState<boolean>(true);
    const [general, setGeneral] = useState<boolean>(true);
    const [math, setMath] = useState<boolean>(true);

    return (
        <div style={{ height: "1000px", display: 'flex' }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.title}>
                <div>
                    <Typography variant="h4" color="white"
                        style={{
                            marginBottom: "1rem",
                        }}>
                        Alec Dewulf's Notes
                    </Typography>
                    <Typography variant="body1" color="white"
                        style={{
                            marginBottom: "1rem",
                        }}>
                        "The man who is ready to taste every branch of learning, is glad to learn
                        and is never satisfied &mdash; he's the man who deserves to be called a philosopher."
                        - Plato
                    </Typography>
                </div>
                <div >
                    <Menu
                        setScience={setScience}
                        setScifi={setScifi}
                        setGeneral={setGeneral}
                        setMath={setMath}
                    />
                </div>
                <div className={styles.blogs}>
                    {(math || science || general) ?
                        <Title
                            date={"April 14, 2022"}
                            text={"Single-Qubit Quantum Systems"}
                            title={"SingleQubit"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
                {/*<div className={styles.blogs}>
                    {(math || science || general) ?
                        <Title
                            date={"April 24, 2022"}
                            text={"Quantum State Spaces"}
                            title={"StateSpaces"}
                        />
                        : <></>
                    }
                </div>*/}
                <div className={styles.blogs}>
                    {(science || general) ?
                        <Title
                            date={"May 24, 2022"}
                            text={"Language Applications"}
                            title={"LanguageApps"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(science || general) ?
                        <Title
                            date={"June 7, 2022"}
                            text={"Spatial Vision Research Without Noise"}
                            title={"spatialVision"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(science || general) ?
                        <Title
                            date={"June 20, 2022"}
                            text={"Convolutional Neural Networks"}
                            title={"convnet"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(science || general) ?
                        <Title
                            date={"July 10, 2022"}
                            text={"Detection Algorithms"}
                            title={"detect"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes;