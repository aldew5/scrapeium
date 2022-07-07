import { Typography } from "@mui/material";
import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const Probability = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Probability and Why It's Important
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    April 11, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/blog") }}>
                    See all posts
                </div>
            </div>
            <div className={styles.body}>
                <Typography variant="body1">
                    <p>
                        Science is the process through which we gradually refine our understanding of the universe.  This definition implies that many of our current theories –
                        our ideas about how things work – are inherently rough.
                        They are the best approximations of the nature of things that we have come up with thus far, but many of them are likely a fair distance from the truth.
                    </p>
                    <p>
                        The scientific framework allows ideas to be usurped by newer, more accurate ones.  Almost every theory can be challenged if the author’s corroborate their claims
                        with proper scientific rigor. The second law of thermodynamics is not one of them.  This famous law states that entropy always increases, that the disorder in the universe is always increasing.
                        This is a fundamental truth about the Universe and it's really quite scary if you think about it for more than a second (more on this later).
                        If you ever come up with an idea that goes against the second law of thermodynamics I suggest you head back to the drawing board.  You will be laughed at no matter how brilliantly you present your undoubtedly flawed arguments.
                    </p>
                    <p>
                        Why have we placed so much faith in this law?  It, like so many other ideas in science, is simply a derivation of the irrefutable statement that the most likely things tend to happen more frequently than the less likely ones.
                        It is more probable that energy will spread out as particles collide and distribute their momenta.  As time passes, the probability that anything else happens tends to zero.  Therefore, energy will even itself out in space not
                        because it “wants to”, but because it is overwhelmingly likely to do so.  Crossing the second law is akin to arguing that less likely events will happen more frequently which is obviously nonsensical.
                    </p>
                    <p>
                        Let’s look at another example in the distinct but closely related world of biology.  In 1859, Charles Darwin proposed his brilliant theory of natural selection (probability applied to nature).
                        It states that heritable traits that more drastically increase the chances of an organism’s survival are more likely to be passed down.
                        If you continue this trend for long enough, you end up with species equipped with all of the amazing features biologists study today.
                        Wings, human brains, and beaks were developed because anomalies in DNA produced traits that made species more robust than their predecessors.  These anomalies occurred because as time
                        passed it became more and more likely for mutations in DNA to produce them.  Probability strikes again.
                    </p>
                </Typography>
            </div>
        </div>
    )
}

export default Probability;