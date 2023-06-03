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
        <div style={{ height: "100vh", display: 'flex' }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.title}>
                <div>
                    <Typography variant="h4" color="white" style={{ marginBottom: "2rem" }}>
                        Alec Dewulf's Blog
                    </Typography>
                </div>
                <div>
                    <Menu
                        setScience={setScience}
                        setScifi={setScifi}
                        setGeneral={setGeneral}
                        setMath={setMath}
                    />
                </div>
                <div className={styles.blogs}>
                    {(general) ?
                        <Title
                            date={"August 26, 2022"}
                            text={"Camp"}
                            title={"Camp"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
                <div className={styles.blogs}>
                    {(general) ?
                        <Title
                            date={"August 28, 2022"}
                            text={"Empty Notebooks"}
                            title={"EmptyNotebook"}
                            small={false}
                        />
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;