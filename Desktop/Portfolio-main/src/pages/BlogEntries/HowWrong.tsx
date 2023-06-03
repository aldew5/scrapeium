import { Typography } from "@mui/material";
import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const HowWrong = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                Book Review: "How Not to be Wrong"
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                </div>
                <div className={styles.link} onClick={() => { navigate("/publications") }}>
                    See all posts
                </div>
            </div>
            <div className={styles.body}>
                <Typography variant="body1">
                    <p>&nbsp; &nbsp;&nbsp;My first thought when I picked up Jordan Ellenberg&rsquo;s&nbsp;How Not to be Wrong&nbsp;in a Boston bookstore was, &ldquo;this sounds a little bit presumptuous, but I&rsquo;m intrigued.&rdquo; A couple of weeks later, I put the book down for the last time, triumphantly setting my bookmark on its back cover as I usually do when I finish a somewhat lengthy book. I was not, however, glad to be done.&nbsp;How Not to be Wrong&nbsp;was insightful, fun to read, and it also featured a lot of good jokes and graphs that were hilariously malformed.</p>
                    <p>&nbsp; &nbsp;&nbsp;I don&rsquo;t think the notion of a spoiler is generally applicable to books about mathematics so I&rsquo;m going to present my biggest takeaway in the hopes that it encourages you to read the rest.</p>
                    <p>&nbsp; &nbsp;&nbsp;We need more math majors.&nbsp;We need more math majors that teach grade school, that run businesses, that organize the countries and cities we live in. Math is not repeated computations. It&rsquo;s not erasing your graph because you had the scale all wrong, or erasing a whole page of work because you accidentally flipped a minus sign on line 2. Mathematics is a framework for thinking about the world that shapes decisions about everything from playing the lottery to protecting planes from bad guys. Math is interesting and applicable and it can&nbsp;even&nbsp;be a lot of fun.&nbsp;</p>
                    <p>&nbsp; &nbsp;&nbsp;This message has been brought to you by a math major.</p>
                </Typography>
            </div>
            <div className={styles.body}>
                This article was published in University of Toronto's <i>The Mike</i>. You can find it &nbsp;
                <a style={{
                    color: "white"
                }}
                    href="https://readthemike.com/issue-2-book-reviews/">here</a>.
            </div>
        </div>
    )
}

export default HowWrong;