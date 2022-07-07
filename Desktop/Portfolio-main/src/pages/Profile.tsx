import Project from "../components/Project";
import styles from "../styles/Profile.module.css";
import TypeWriter from 'typewriter-effect';
import SideBar from "../components/SideBar";

const Profile = () => {
    return (
        <>
            <div className={styles.bar}>
                <SideBar />
            </div>
            <div>
                <div className={styles.title}>
                    <TypeWriter
                        options={{
                            strings: ['These are some of the projects I\'ve built',
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
                </div>
            </div>
        </>
    )
}

export default Profile;