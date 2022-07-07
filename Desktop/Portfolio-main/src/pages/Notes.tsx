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
        <>
            <div className={styles.bar}>
                <SideBar />
            </div>
            <div className={styles.title}>
                <div>
                    <Typography variant="h4" color="white" style={{ marginBottom: "1rem", marginLeft: "10rem" }}>
                        Alec Dewulf's Notes
                    </Typography>
                    <Typography variant="body1" color="white" style={{ marginBottom: "1rem", marginLeft: "10rem" }}>
                        I like to take notes when I read about interesting things (which is a lot).
                        These are some of my favourites:
                    </Typography>
                </div>
                <div style={{ marginLeft: "10rem" }}>
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
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(math || science || general) ?
                        <Title
                            date={"April 24, 2022"}
                            text={"Quantum State Spaces"}
                            title={"StateSpaces"}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(science || general) ?
                        <Title
                            date={"May 24, 2022"}
                            text={"Language Applications"}
                            title={"LanguageApps"}
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
                        />
                        : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Notes;