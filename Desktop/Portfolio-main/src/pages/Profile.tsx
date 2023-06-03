import Project from "../components/Project";
import styles from "../styles/Profile.module.css";
import TypeWriter from 'typewriter-effect';
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import {
    Dispatch,
    SetStateAction,
} from "react";


interface ProfileProps {
    showBar: boolean;
    setShowBar: Dispatch<SetStateAction<boolean>>
}


const Profile = ({ showBar, setShowBar }: ProfileProps) => {
    return (
        <div>
            <div>
                <div style={{ display: "flex" }}>
                    <TopBar
                        showBar={showBar}
                        setShowBar={setShowBar}
                    />
                </div>
                {(showBar) ?
                    <div className={styles.bar}>
                        <SideBar
                            showBar={showBar}
                            setShowBar={setShowBar}
                        />
                    </div>
                    : <div></div>
                }
            </div>
            <div className={(showBar) ? styles.main_bar : styles.main_normal}>
                <div>
                    <div className={styles.title}>
                        <TypeWriter
                            options={{
                                strings: ['These are some of my projects',
                                    'Click the links to learn more about them'],
                                autoStart: true,
                                loop: true,
                                delay: 30,
                            }}
                        />
                    </div>
                    <div className={styles.projects}>
                        <div className={styles.project}>
                            <Project
                                text={"TvL Experiment"}
                                image={"tvl"}
                            />
                        </div>
                        <div className={styles.project}>
                            <Project
                                text={"ARCVision"}
                                image={"aruco"}
                            />
                        </div>
                        <div className={styles.project}>
                            <Project
                                text={"Ashbury Book"}
                                image={"book"}
                            />
                        </div>
                        <div className={styles.project}>
                            <Project
                                text={"Falling Blocks"}
                                image={"falling_blocks"}
                            />
                        </div>
                        <div className={styles.project}>
                            <Project
                                text={"Dewordle"}
                                image={"dewordle"}
                            />
                        </div>
                        <div className={styles.project}>
                            <Project
                                text={"Mammogram Checking"}
                                image={"mammogramchecking"}
                            />
                        </div>
                        <div className={styles.project}>
                            <Project
                                text={"Kaio"}
                                image={"kaio"}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;