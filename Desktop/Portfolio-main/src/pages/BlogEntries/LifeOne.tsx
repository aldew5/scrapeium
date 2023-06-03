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
                    <p>CHAPTER ONE: ANNIHILATION</p>
                    <p>
                        “Deploy sequence initiated. Teleporting A-1107…”.  I feel this message broadcasted into my mind as I stand my post on the overhead balcony.  I feel it ramify through my nervous system, traveling through its many sinuous pathways towards my processing unit where its meaning is deciphered.  For a brief instant of time, I forget about my job as a watcher, I forget about my positioning on the tower and the weapon whose base I am strongly gripping and I marvel at the intricate nature of my system.  I marvel at how its many collaborating parts are able to work in concert so that such signals can not only be understood but acted upon; used for purposes deemed fit by their master.  The power a person’s body affords him over his environment is truly something to admire on occasions like these where another’s body is at stake.  Forgetting to be amazed at what one possesses, biological or otherwise, is the first step to taking it for granted.

                    </p>
                    <p>
                        The  particular message I have just received indicates that another player is about to be disassembled. I look down into the deep maw of the tower over which I stand and see the player in question already irrevocably ensconced in its teeth.  I feel his cries as the machine begins its work on him.  It maneuvers through the twists and turns of his system analyzing its unique organization and structure.  It understands the data he’s gathered through his life and the way in which this knowledge determines his current actions and decisions.  Soon the machine comprehends him completely. It has deciphered and noted the genetic code that governs his being and the model responsible for the actions of his body.  His capacity to think and to move are stored in the machine’s vast memory alongside the many others already ripped apart by its teeth.  Slowly, he disappears from our world as he ceases to exist.  Minutes later, he enters the game.

                    </p>
                    <p>
                        The term “disassembled” is really quite inaccurate in that it does a poor job of conveying the harshness of the process it describes.  The Overseers declared it the official term for the process because they found it more palatable than the other names imagined by the People.  Annihilation is likely a far more accurate term.  It more aptly describes the way the process completely destroys the very being of each and every player it affects.  Unfortunately, this is the only way to understand them.  To properly learn the intricacies of a player’s mind, it must be torn apart bit by bit.
                    </p>
                    <p>
                        Player A-1107 has just become one of over 300 billion other active players in the game.  This statistic may make A-1107 seem completely insignificant in the vastness of the population, but this is not necessarily the case.  As the Overseers have observed time and time again, it is often the ideas of a single prodigious player that most dramatically impact the world.  The truth is that nobody knows whether A-1107 will be the next such prodigy.  His genetic code is made publicly available which allows for his careful analysis by people interested in answering such questions.  We take interest in the game in the same way humans take interest in sports.  We develop one-way connections with the players and root for their success.  We bet large sums of money on them and gather to read about the things they have accomplished.  The game provides us with joy; it is the reason many of us continue to live.
                    </p>
                    <p>
                        As a watcher, it is my job to ensure the game runs smoothly.  Although inevitable, glitches and bugs are incredibly serious and their effects must be mitigated at all costs.  There have only been a few cases in which the game’s operation has been sufficiently aberrant so as to attract the notice of the players.  Thankfully, the vast majority of the population failed to notice any discrepancies in these instances.  Those that did were simply dismissed as crazy by the others.  The players have been so thoroughly conditioned to believe the rules of the game are absolute that anything else is inconceivable to their small minds.  We have convinced the players that the game is all-encompassing and furthermore, we have made them comfortable in that fact.  The players have been trained to seek order among chaos and it is our job to make sure that they have something to find.  That’s what makes it so entertaining afterall.

                    </p>
                    <p>
                        The players have called us many names over the years: Ra, God, Allah.  We are their creators, their rulers, the reason their universe exists in the first place.  We simply call ourselves the game makers.
                    </p>
                </Typography>
            </div>
        </div>
    )
}

export default LifeOne;