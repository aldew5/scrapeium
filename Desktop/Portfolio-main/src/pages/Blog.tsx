import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Menu from "../components/BlogsAndNotes/Menu";
import Title from "../components/BlogsAndNotes/Title";
import styles from "../styles/BlogsAndNotes.module.css";
import { useState } from "react";

const Blog = () => {

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
                    <Typography variant="h4" color="white" style={{ marginBottom: "2rem", marginLeft: "10rem" }}>Alec Dewulf's Blog</Typography>
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
                            date={"April 12, 2022"}
                            text={"Probability and Why It's Important"}
                            title={"Probability"}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(scifi || general) ?
                        <Title
                            date={"April 22, 2022"}
                            text={"Life: Chapter 1"}
                            title={"LifeOne"}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(general || science) ?
                        <Title
                            date={"May 24, 2022"}
                            text={"Priming in Inefficient Visual Search: Real, but Transient"}
                            title={"transient"}
                        />
                        : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Blog;