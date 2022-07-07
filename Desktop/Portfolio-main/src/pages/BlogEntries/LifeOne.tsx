import { Typography } from "@mui/material";
import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const LifeOne = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Life: Chapter 1
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    April 22, 2022
                </div>
                <div className={styles.link} onClick={() => { navigate("/blog") }}>
                    See all posts
                </div>
            </div>
            <div className={styles.body}>
                <Typography variant="body1">
                    <p>CHAPTER ONE</p>
                    <p>
                        &ldquo;Deploy sequence initiated. Teleporting A-1107&#8230;&rdquo;. I feel this message broadcasted into
                        my mind as I stand at my post on the overhead balcony. I am looking down as another player is
                        prepared for disassembly beneath me. I watch closely as he moves into the central machine beneath the
                        anxious gazes of the observers looking down on him. I feel his cries as the machine begins its work.
                        It maneuvers through the twists and turns of his brain analyzing its unique organization.
                        Soon the machine understands him completely. It has deciphered and noted the genetic code that governs his being.
                        His capacity to think and to move are stored in its vast memory. Slowly, he disappears from our world as he ceases to exist.
                        Minutes later, he enters the game.
                    </p>
                    <p>
                        The term &ldquo;disassembled&rdquo; is really quite inaccurate in that it does a poor job of conveying the harshness of the
                        process it describes. The Overseers declared it the official term for the process because they found it more palatable than the
                        other names imagined by the People. Annihilation is likely a far more accurate term. It more aptly describes the way the process
                        completely destroys the very being of each and every player. Unfortunately, this is the only way to understand them. To properly
                        learn the intricacies of a player&rsquo;s mind, it must be torn apart bit by bit.
                    </p>
                    <p>Player A-1107 has just become one of over 300 billion other active players in the game. This statistic may make A-1107 seem completely
                        insignificant in the vastness of the game, but this is not the case. As the Overseers have observed time and time again, it is often the
                        ideas of a single prodigious player that most dramatically impact it. The truth is that nobody knows whether A-1107 will be the next prodigy.
                        His genetic code is made publicly available which allows for his careful analysis by people interested in answering such questions. We take interest
                        in the game in the same way humans take interest in sports. We develop one-way connections with the players and root for their success. We bet large sums
                        of money on them and gather to read about the things they have accomplished. The game provides us with joy; it is the reason many of us continue to live.
                    </p>
                    <p>
                        As a watcher, it is my job to ensure the game runs smoothly. Glitches or bugs are incredibly serious and they must be avoided at all costs.
                        There have only been a few cases in which the game has failed to operate as it should, but thankfully, the vast majority of the players failed
                        to notice any discrepancies. Those that did were simply dismissed as crazy by the others. The players have been so thoroughly conditioned to
                        believe the rules of the game are unbreakable, that anything else is inconceivable to them. We have convinced the players that the game is absolute
                        and made them comfortable in that fact. The players have been trained to seek order among a seemingly chaotic world and we make sure it is there.
                        That&rsquo;s what makes it entertaining afterall.
                    </p>
                    <p>
                        The players have called us many names over the years: Ra, God, Allah. We are their creators, their rulers, the reason their universe exists in the
                        first place. We simply call ourselves the game makers.
                    </p>
                </Typography>
            </div>
        </div>
    )
}

export default LifeOne;