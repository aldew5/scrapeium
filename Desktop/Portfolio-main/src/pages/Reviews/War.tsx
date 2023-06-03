import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Farm = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>War and Peace Volume 1</i> by Leo Tolstoy
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    May 2, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>
                            I will write a full review once I finish all three volumes. For now, 
                            here are my favourite quotes from Volume 1:
                        </p>
                        <div style={{marginLeft: "1rem"}}>
                            <p>"Either this look meant nothing but that as long as one has eyes 
                                they must look somewhere, or it meant too much."</p>
                            <p>"It was as if the thread of the chief screw which held his life together were stripped, 
                                so that the screw could not get in or out, but went on turning uselessly in the same place."</p>
                            <p>
                            "Try by the frequent thought of death to bring yourself to regard it not as a dreaded foe, but as a friend that frees the soul grown 
                            weary in the labors of virtue from this distressful life, and leads it to its place of recompense and peace."
                            </p>
                            <p>
                                "Can anything in the world make her or me less a pray to evil and death? &ndash; 
                                death which ends all and must come today or tomorrow &ndash; at any rate in an instant compared with eternity."
                            </p>
                            <p>
                                "All we can know is that we know nothing. And that is the height of human wisdom."
                            </p>
                            <p>
                                "If you go on modeling and modeling you must get smeared with clay."
                            </p>
                            <p>
                                "All the same, I love and value nothing but triumph over them all, I 
                                value this mystic power and glory that is floating here above me in the mist."
                            </p>
                            <p>
                                "And precious and dear as many persons are to me  father, sister, wife &ndash; those dearest to me &ndash; 
                                yet dreadful and unnatural as it seems, I would give them all at once for a moment of glory, or triumph over men, of love from men 
                                I don’t know and never shall know, for the love of these men here."
                            </p>
                            <p>
                                "My general, I am engaged with rice and cutlets. Look after military matters yourself."
                            </p>
                            <p>
                                "It is very difficult to tell the truth and young people are rarely capable of it."
                            </p>
                            <p>
                                "If no one fought except on his own conviction, there would be no wars."
                            </p>
                            <p>
                                "Prince Andrew smiled as he looked at his sister, as we smile at those we think we thoroughly understand."
                            </p>
                            <p>
                                "You fear and yet long to cross that line, and know that sooner or later it must be crossed and you will have to find out 
                                what is there, just as you will inevitably have to learn what lies on the other side of death."
                            </p>
                            <p>
                                "We don’t love people for the good they have done us, but for the good we have done them."
                            </p>
                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Farm;
