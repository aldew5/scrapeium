import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Delusion = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>The God Delusion</i> by Richard Dawkins
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    March 4, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 5/5</p>
                        <p>
                            The <i>God Delusion</i> is a fantastic book, and I think that everybody should read it. This is a book of science and not theology. Dawkins does not criticize belief in God (as the title may suggest), but rather he considers the question as a physicist would consider the question of matter. He has his own beliefs, but he does not let them interfere with his consideration of the objective evidence. Dawkins argues that the God Hypothesis is fundamentally a scientific question and that the evasive measures religious zealots have taken to avoid classifying it as such is what has generated much of the fog around it.
                        </p>
                        <p>
                            I especially enjoyed Dawkin's treatment of Russell's teapot: Suppose that a large group of people claim that there is a teapot orbiting the Earth that is too small to be seen by human eyes. When telescopes are invented, they claim that the teapot must in fact been even smaller than they thought previously, but still there nonetheless. No matter how good our measuring devices become, there is always a way to update the theory of the teapot so that it remains hidden. But why should the burden of disproof lie on the non-believers? Why shouldn't those convinced of the teapot's existence be required to present evidence for such a claim instead of just stating its existence?
                        </p>
                        <p>
                            Many people have treated God in a similar manner asserting that understanding Him is beyond the tools of modern science. The burden of disproof then falls onto the scientists who have to update their tools. When a contradiction is discovered&mdash;like the age of the Earth&mdash; believers in God (sometimes) update their theory so that it remains somewhat intact. Why shouldn't believers in God have to present some empirical evidence to support their claims?
                        </p>
                        <p>
                            Dawkin's examples of the treatment of religion and religious people are equally profound. It seems as though we cannot discuss the matter of religion&mdash; as we discuss virtually any other matter&mdash; because offending someone on religious grounds is so unconscionable. Why is that so? The effect of such an offence may lead to real violence, which many would, unfortunately, consider justified. What is even scarier is that people sometimes want to be offended just to commit crimes to protect the sanctity of their god (for example, against the Danish newspaper Jyllands-Posten that printed a picture of the prophet Muhammad).
                        </p>
                        <p>
                            In <i>The God Delusion</i>, Dawkins confidently discusses many of the thoughts most of us have at points in our life then analyzes them scientifically. Regardless of your beliefs, these questions are important, and I would argue that analyzing society's treatment of them is even more important.
                        </p>
                        <p>Here are some of my favourite quotes from <i>The God Delusion</i> (note that many of them are attributed to other authors):</p>
                        <div style={{ marginLeft: "1rem" }}>
                            <p>"People say we need religion when what they really mean is we need police."</p>

                            <p>"I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it." - Mark Twain</p>

                            <p>"Men never do evil so completely or cheerfully as when they do it from religious conviction." - Blaise Pascal</p>

                            <p>"Religion is regarded by the common people as true, by the wise man as false and by rulers as useful." - Lucius Annaeus Seneca.</p>

                            <p>"There is in every village a torch &ndash; the teacher and an extinguisher &ndash; the clergyman." - Victor Hugo</p>

                            <p>"Lighthouses are more useful than churches." - Benjamin Franklin</p>

                            <p>"But I try not to think with my gut. Really it is okay to reserve judgment until the evidence is in."</p>

                            <p>"To pray: to ask that the laws of the universe be annulled on behalf of a single petitioner, confessedly unworthy." - Ambrose Bierce</p>

                            <p>"Those who wish to base their morality literally on the Bible have either not read it or not understood it."</p>
                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Delusion;
