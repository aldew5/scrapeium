import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Eden = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>East of Eden</i> by John Steinbeck
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    April 10, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>The following is less of a review and more of a personal interpretation of the novel. If you disagree
                            send me an email and tell me why.
                        </p>
                        <p>Rating: 5/5</p>
                        <p>
                            <i>East of Eden</i> is a book about people whose templates for the world don't align
                            with their own realities. A man who sees light coming from a woman that only wishes
                            to use him. A young boy who sees his partner not as she is but how he wishes to see her. He feels stretched
                            apart between two places at once, neither of which he particularly likes. He works hard and leaves
                            the small town in which he was born in an effort to be something. He doesn't find what he thought he would
                            in Palo Alto and is too impatient to look anywhere else so he marches to his death.

                            Both man and boy had ideas for how things should be and when they realized
                            how things actually were the consequences were life-altering or life-ending.
                        </p>
                        <p>
                            This novel gives profound insight into these deep struggles of normal life. People die, people
                            change their minds, and sometimes people do awful things. All that we can do
                            is make our templates less rigid so as to minimize the shock we feel when the world invariably
                            surprises us. People whose lives revolve around a small number of things are bound to
                            be let down and left empty.
                        </p>
                        <p style={{ marginBottom: "2rem" }}>
                            As of now, this is my favourite book (And I think it will stay that way for some time). I love Steinbeck's unpretentious writing style and the way
                            it allows one to connect with his characters. I felt their struggles viscerally and often drew parallels
                            with my own life. Although the actions of many of the characters are often extreme, they retain
                            a strong resemblance to common struggles.
                        </p>
                        <p>Here are some of my favourite quotes from <i>East of Eden</i>:</p>
                        <div style={{marginLeft: "1rem"}}>
                            <p>"Sometimes a man wants to be stupid if it lets him do a thing his cleverness forbids."</p>

                            <p>"Feed a man, clothe him, put him in a house and he will die of despair."</p>

                            <p>"Open the table drawer and then make use of that turnip you call your head."</p>

                            <p>"It seems to me that if you or I must choose between two courses of thought or action, 
                                we should remember our dying and try so to live that our death brings no pleasure to the world."</p>

                            <p>"It&rsquo;s like a life&ndash;so quick when we don&rsquo;t watch it and so slow when we do."</p>

                            <p>"You&rsquo;re too young a man to be panning memories. You should be getting yourself some new 
                                ones so that the mining will be richer when you come to age."</p>

                            <p>"Eventless has no posts to drape duration on."</p>

                            <p>"Some people think it's an insult to the glory of their sickness to get well. 
                                But the time poultice is no respecter of glories. Everyone gets well if he waits around."</p>

                            <p>"It&rsquo;s hard to give people things &ndash; I guess it&rsquo;s even harder to be given things."</p>

                            <p>"Weltschmerz. The world sadness that rises into the soul like a gas and spreads despair so that 
                                you probe for the offending event and can find none."</p>

                            <p>"Maybe the less you have the more you are required to boast."</p>

                            <p>"You can&rsquo;t lay in bed and run a farm."</p>

                            <p>"A man&rsquo;s mind can&rsquo;t stay in time the way his body does."</p>

                            <p>"There&rsquo;s a capacity for appetite that a whole heaven and earth can&rsquo;t satisfy."</p>

                            <p>"That&rsquo;s not how he wanted the story to go &ndash; and he wouldn&rsquo;t have any other story. 
                                So he tore up the world."</p>
                        </div>
                    </Typography>
                </div>
            </div>

        </div>

    )
}

export default Eden;
