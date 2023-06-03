import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Sea = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>The Old Man and the Sea</i> by Ernest Hemingway
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    August 17, 2021
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 3.5/5</p>
                        <p>
                            I didn't particularly like this novel. I don't really enjoy Hemingway's short, choppy prose, but this is, of course, a personal opinion. I often found myself wishing the fish would just be caught already. The battle felt monotonous and too far drawn out&mdash;it was like waiting for the chorus in a song with a brutally long and discordant interlude. Perhaps this is exactly what Hemingway intended. Maybe a more glorious action-packed battle would've ruined the symbolism he was aiming for.
                        </p>
                        <p>
                            I think the main idea of the novel is that life is not always glorious or fair and can behave irreverently towards beautiful things. The old man must kill the large beautiful marlin because he is a fisherman and it is a fish. Should their roles be reversed, the marlin would do the same. The fight with the prodigious fish nearly kills the old man, but he obstinately refuses to let it live despite his veneration for it. Even though he is able to kill the marlin, its carcass is destroyed by hungry sharks before he can get it back to the dock.
                        </p>
                        <p>
                            Despite his best efforts and short-lived success, in the end, the fisherman lost to these ruthless interlopers. The sharks were not respectful of the man or his great catch; they are sharks, and so they must eat fish. The old man falls asleep imagining himself in a different era, one that he enjoyed and that seems to bring him peace now.
                        </p>
                        <p>
                            I interpreted this book as a metaphor for life. Sometimes, no matter how hard we try, there are external, uncontrollable, soulless factors that impede our success. The only thing we can do is fight them with those that we love and dream about happier, more peaceful times when we go to sleep each night. I think the old man is nameless because a more personal title would make him less of a canvas and more of a painting. Hemingway wants the reader to feel tired and weary like the old man. The old man's job is to catch fish, but the reader's job might be selling stocks or helping sick people. Any job is occasionally tiring, and life feels long when you watch it, just like the old man's fight with the fish.
                        </p>
                        <p>
                            This book was very thought-provoking, even though I found the specifics dull. I will probably update this review with more of my thoughts in the future. Here are a couple of my favourite quotes:
                        </p>
                        <div style={{ marginLeft: "1rem" }}>
                            <p>"Fish. I love you and respect you very much. But I will kill you dead before this day ends."</p>

                            <p>"You were born to be a fisherman as the fish was born to be a fish."</p>

                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Sea;
