import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Hitchhiker = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>The Hitchhiker's Guide to the Galaxy</i> by Douglas Adams
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    May 16, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 5/5</p>
                        <p>My review is on the way. For now, here are my favourite quotes:</p>
                        <div style={{ marginLeft: "1rem" }}>
                            <p>"Arthur prodded the mattress nervously and then sat on it himself: in fact he had very little to be nervous about, because all mattresses grown in the swamps of Sqornshellous Zeta are very thoroughly killed and dried before being put to service. Very few had ever come back to life again."</p>
                            <p>
                                "During a recitation by their Poet Master Grunthos the Flatulent of his poem ‘Ode To A Small Lump of Green Putty I Found In My Armpit one Midsummer Morning’ four of his audience died of internal hemorrhaging, and the President of the Mid-Galactic Art Nobbling Council survived by gnawing one of his own legs off."
                            </p>
                            <p>
                                "The principle of generating small amounts of <i>finite</i> improbability by simply hooking the logic circuit of a Bambleweeny 57 Sub-Meson Brain to an atomic vector plotter suspended in a strong Brownian Motion producer (say a nice hot cup of tea) were of course well understood &mdash; and such generators were often used to break the ice at parties by making all the molecules in the hostess’s undergarments leap simultaneously one foot to left.
                            </p>
                            <p>
                                "Probability factor of one to one … we have normality .. Anything you still can’t cope with is therefore your own problem."
                            </p>
                            <p>
                                "He is the best bang since the big one."
                            </p>
                            <p>
                                "If they don’t stop exercising their lips, their brains start working."
                            </p>
                            <p>
                                "They show two to the power of infinity minus one to one against (an irrational number that only has a conventional meaning in improbability physics)."
                            </p>
                            <p>
                                "The Answer to the Great Question of Life, the Universe and Everything is forty-two, said Deep Thought, with infinite majesty and calm."
                            </p>
                            <p>
                                "The Great Hyperlobic, Omni-Cognate Neutron Wrangler said Deep Thought could talk all four legs off an Arcturian Megadonkey–but only I could persuade it to go for a walk afterwards."
                            </p>
                            <p>
                                "Why are people born? Why do they die? Why do they want to sped so much of the intervening time wearing digital watches?"
                            </p>
                        </div>
                    </Typography>
                </div>
            </div >

        </div >

    )
}

export default Hitchhiker;
