import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Feynman = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>Surely You're Joking Mr. Feynman!</i> by Richard Feynman
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    March 23, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 5/5</p>
                        <p>Feynman wrote exactly like I would have imagined he spoke: with a chaotic, witty passion and a carefree attitude towards life and all that it encompasses. He seemed to bounce from one interesting job to the next, attempting to seduce various women along the way. He moved to a desert to help build the first atomic bomb but made sure to choose a room facing the women's living quarters. He was a professor of physics and simultaneously an avid supporter of the local strip club. Feynman was special because he refused to adhere to stereotypes or behave as he may have been expected to. He did as he pleased and let his passion for learning carry him through life.</p>

                        <p>The novel was primarily focused on his (mostly) successful exploits, but I don't think Feynman consciously avoided discussing his failures. I suspect he probably laughed when he failed, just as he laughed when he succeeded. Viewed from this perspective, it's hard to even classify experiences with this binary scheme. They are simply experiences, and perhaps the successful ones naturally made for a better story.</p>

                        <p>At first, I found the novel a little bit discontinuous. The events were roughly chronological, but every once and a while, Feynman flipped back to some previous event in his life. After some time, I started to accept and enjoy the book's haphazard arrangement. While reading, I often found myself encouraged to live life a little bit more like Feynman did: think a little bit more about big things and a little less about small things. I think we all sometimes picture the exceptional person sitting at their desk in a constant productive state, always working to be &quot;better than us&quot; (whatever that actually means). But this is simply not how people exist! Even the most accomplished people have lives and make jokes and occasionally do ridiculous things. Everyone needs to be reminded of that sometimes, and that is what this book does.</p>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Feynman;
