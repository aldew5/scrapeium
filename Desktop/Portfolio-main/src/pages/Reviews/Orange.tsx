import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Orange = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>A Clockwork Orange</i> by Anthony Burgess
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    May 7, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 4/5</p>
                        <p>My review is on the way. For now, here are my favourite quotes:</p>
                        <div style={{marginLeft: "1rem"}}>
                            <p>He looked a malenky bit poogly when he viddied the four of us like that."</p>
                            <p>"Think thou not on them. There’ll be life like down here most likely, with some getting knifed and others doing the knifing."</p>
                            <p>"An unmuddied lake sir. Clear as an azure sky of deepest summer."</p>
                            <p>"But it was not really sleep, it was like passing out into another better world."</p>
                            <p>"Does God want goodness or the choice of goodness? Is a man who chooses the bad perhaps in some way better than a man who has the good imposed on him?"
                            </p>
                            <p>
                                "The heresy of an age of reason. I see what is right and approve, but do what is wrong."
                            </p>
                            <p>"A man who ceases to choose ceases to be a man."</p>
                            <p>"I am everyone’s friend, except to my enemies."</p>
                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Orange;
