import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Slaughter = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>Slaughterhouse-Five</i> by Kurt Vonnegut
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    May 13, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 4/5</p>
                        <p>My review is on the way. For now, here are my favourite quotes:</p>
                        <div style={{marginLeft: "1rem"}}>
                            <p>"What he meant, of course, was that there would always be wars, that they were as easy to stop as glaciers."</p>
                            <p>"The second hand on my watch would twitch once, and a year would pass, and then it would twitch again."</p>
                            <p>"If everybody would leave him alone for just a little while, he thought, he wouldn’t cause anybody any more trouble. He would turn to steam and float up among the treetops."</p>
                            <p>"Later on in his life, the Tralfamadorians would advise Billy to concentrate on the happy moments of his life and ignore the unhappy ones&mdash;to stare only at pretty things as eternity failed to go by."</p>
                            <p>"How nice&mdash;to feel nothing, and still get full credit for being alive."</p>
                            <p>"That’s the attractive thing about war. Absolutely everybody gets a little bit of something."</p>
                            <p>"Before you kill somebody, make absolutely sure he isn’t well connected."</p>
                            <p>"Well here you are, Mr Pilgrim, trapped in the amber of this moment. There is no why."</p>
                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Slaughter;
