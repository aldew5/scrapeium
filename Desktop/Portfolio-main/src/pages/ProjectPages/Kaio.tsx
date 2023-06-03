import SideBar from "../../components/SideBar";
import styles from "../../styles/Template.module.css";

// images
import Landing from "../../assets/kaio_girl.png";

const Kaio = () => {

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div className={styles.bar}>
            </div>
            <div className={styles.para}>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "40px" }}>Kaio</div>
                <div style={{ marginBottom: "2rem", color: "white", fontSize: "20px" }}>
                    <p>I built a website for Kaio: </p>
                    Kaio makes NFTs generated to fit their pirate-anime theme. Our core belief is to
                    provide value to our holders by hosting exclusive events and creating other
                    compelling perks. Our mission is to build a strong community that intertwines
                    with the metaverse and the real world.
                </div>
                <div style={{ width: "100", display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div className={styles.github}
                            onClick={() => {
                                window.location.href = "https://github.com/aldew5/Kaio";
                            }}>
                            Github
                        </div>
                        <div className={styles.website}
                            onClick={() => {
                                window.location.href = "https://www.kaio-nft.com/";
                            }}>
                            Website
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                <div style={{ display: "table-row" }}>
                    <div style={{ display: "table-cell", width: "500px" }}>
                        <img src={Landing} width="300px" alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kaio;