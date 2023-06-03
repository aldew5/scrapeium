import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Brave = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>Brave New World</i> by Aldous Huxley
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    May 5, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 5/5</p>
                        <p>I found the plot of this novel to be strikingly similar to that of <i>1984</i> by George Orwell. There is a dystopian society that was created to solve people's fundamental problems. There is a group of non-conformers who discover the ways in which they are being oppressed, purportedly for their own good. Then the non-conformers band together to fight for the freedoms that their rulers decided were too dangerous to be allowed.
                        </p>
                        <p>
                            This is, of course, a gross simplification of a fantastic story. Huxley's ideas differ greatly from Orwell's, and the particulars bear little resemblance. I found Huxley's caste system to be a profound but obviously twisted (and sometimes funny) way to eliminate the grounds for social disparity. People are bred and conditioned to fulfill a particular purpose and thus do it with contentment. Epsilon Semi-Morons are not capable of the thought required to engineer emotions. Conversely, Alpha Plusses are (mostly) stimulated by their work in generating hypnopaedic platitudes and would feel wasted if they had to perform the labours of lower castes. As the island example illustrates, when people are allowed to develop unchecked, things become more chaotic.
                        </p>
                        <p>
                            I was reminded of a conversation between Bezukhov and Prince Andrew (two Russian aristocrats) in <i>War and Peace</i>. The former has decided to foist his notion of comfort onto the serfs that farm his land. These serfs were not conditioned by an artificial process but rather by their natural environment to be content with their challenging lives. Days filled with hard labour with only brief respites is all they know. Constructing hospitals and schools for their use seems like a great gift to those who grew up with these luxuries. Viewed from their perspective, it was more of an unwanted perturbance to their society.
                        </p>
                        <p>
                            Our world now is much different than it was during the Napoleonic Wars and from Huxley's dystopia. Notwithstanding, these books give perspective on the many less tangible barriers that still hinder social mobility even in rich nations. People are sometimes forced into various roles by their upbringing or even by the place in which they were born. The realization that there is something more is grounds for being shipped off to a remote island in <i>Brave New World</i>. In our society, it marks the start of a lifelong struggle to escape the invisible bottle.
                        </p>
                        <p>Here are some of my favourite quotes from <i>Brave New World</i>:</p>
                        <div style={{marginLeft: "1rem"}}>
                            <p>"<b>Riemann surface tennis.</b>"</p>
                            <p>"One believes things because one has been conditioned to believe them."</p>
                            <p>"Actual happiness looks pretty squalid in comparison with the over-compensations for misery. And, of course, stability isn’t nearly so spectacular as instability. And being contented has none of the glamor of a good fight against misfortune, none of the picturesqueness of a struggle with temptation, or a fatal overthrow by passion or doubt. Happiness is never grand."</p>
                            <p>
                                "Each one of us goes through life inside a bottle."
                            </p>
                            <p>
                                "Science is dangerous; we have to keep it most carefully chained and muzzled."
                            </p>
                            <p>
                                "Words can be like X-rays if you use them properly–they’ll go through anything."
                            </p>
                            <p>
                                "If one’s different, one’s bound to be lonely."
                            </p>
                            <p>
                                "One of the principal functions of a friend is to suffer (in a milder and symbolic form) the punishments we should like, but are unable to, inflict upon our enemies."
                            </p>
                            <p>
                                "For particulars, as everyone knows, make for virtue and happiness; generalities are intellectually necessary evils."
                            </p>
                            <p>
                                "Never put off till tomorrow the fun you can have today."
                            </p>
                            <p>
                                "Everyone belongs to everyone else."
                            </p>
                            <p>
                                "Ending is better than mending. The more stitches the less riches."
                            </p>
                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Brave;
