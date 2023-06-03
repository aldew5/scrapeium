import { Typography } from "@mui/material";
import styles from "../../styles/Entries.module.css";
import { useNavigate } from "react-router-dom";

const HowWrong = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                A Recap of Apple's Most Recent Keynote Event
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
                    <p>After watching a cluster of stars and galaxies align to produce the outline of a half-eaten apple, I, and the other attendees of Apple&rsquo;s Far Out event, were whisked through the galaxy to a little blue planet with a big gray circle on it. We were brought gently down to its surface and subsequently flown around the verdant headquarters of Earth&rsquo;s most valuable company. We glided under Apple Park&rsquo;s famous rainbow statue and through its acres of grass and trees. After one final panorama of the perfect blue sky overhead, we were at last brought face-to-face with the man we were all waiting to see, Mr. Tim Cook, CEO of Apple.&nbsp;</p>
                    <p>&ldquo;Personal&hellip; unique integration of hardware and software&hellip; enriching people&rsquo;s lives,&rdquo; but how Tim? What new things do you have lined up for us behind all of this big tech lingo?&nbsp;</p>
                    <p>Meet the first product of the day: the Apple Watch Series 8. It looks virtually identical to its predecessor, but under its sleek stainless steel exterior lies a whole suite of new technologies. Among them, a really good temperature sensor that women can use to track potential deviations in their menstrual cycles. Not necessarily useful for all of us, but cool nonetheless. The Series 8 also features a low power mode capable of extending the life of your watch by up to 24 hours. This was definitely something all of us needed. I mean, I can&rsquo;t be the only lazy Apple Watch user with a tendency to place it on the edge of a table instead of in a charger.&nbsp;</p>
                    <p>If you&nbsp;still&nbsp;aren&rsquo;t impressed by the direction of the Apple Watch, meet the Ultra. It&rsquo;s a bigger, better titanium cased version of the Series 8. It has an additional button, more settings, more battery, and, of course, it costs more money (about $800). The arrival of a luxury line of products to the Apple Watch Series was a highlight of the event for many.</p>
                    <p>&nbsp; &nbsp;&nbsp;Next up was the first update to the AirPods Pro in over three years. But first, a cool transition through an empty futuristic subway. We quickly learned that the painfully awkward days of &ldquo;Hey Siri, turn my volume up!&rdquo; would soon meet their end at the hands of the new volume control feature. The AirPods Pro 2 also cancels out 2x more noise, has better battery life, and features speakers on the case that play a noise when you inevitably lose them. Perhaps the most exciting addition though, is the ability to tune your Airpods to the specific shape of your ears. Yes, that&rsquo;s right, when Tim said &ldquo;personal&rdquo; he wasn&rsquo;t kidding around. You can now scan your ears with an IOS 16 device to create and save a tailored audio profile. I don&rsquo;t know if ear shapes vary enough for this to make a significant improvement to sound quality, but it is nonetheless a significant step in personalization of consumer technology.</p>
                    <p>&nbsp; &nbsp;&nbsp;AirPods and Apple Watches are great, but let&rsquo;s be honest, the product most people care most about here (and everywhere else) is the iPhone. The most obvious new feature of the iPhone 14 is the little pill-shaped island at the top of the screen. &ldquo;Pill-shaped island&rdquo;&nbsp;is, of course, not catchy enough to be the official term for the feature. That honor went to &ldquo;dynamic island&rdquo;.&nbsp;The dynamic island&nbsp;expands on touch to let you interact with active applications like Maps or Music. Instead of executing the time-consuming swipe down maneuver, you can now change your playlist or make sure you aren&rsquo;t lost simply by interacting with the island.</p>
                    <p>The iPhone 14 and 14 Pro also feature some classic Apple-style improvements. Namely, you can now take&nbsp;even better&nbsp;photographs. The new Action mode lets you take videos whilst shaking your phone from side to side by stabilizing the nauseating output a normal video mode might produce. This could be helpful if you ever want to record a run through a field in the clouds as was kindly demonstrated in the event.&nbsp;</p>
                    <p>&nbsp; &nbsp;&nbsp;Okay, that was a lot. Let&rsquo;s review: we got a cool new luxury watch, AirPods with volume control, satellite SOS, better battery life across the board and, most importantly, an even better camera on the new iPhone 14. Apart from the announcements themselves, the event was really enjoyable to watch. It felt as though every piece of clothing, every camera angle and every sequence of shots had been meticulously planned and coordinated to maximize the viewer experience. Apple has never been one to cheap-out on showmanship and this event was no exception.&nbsp;</p>
                    <p>If you weren&rsquo;t able to attend Far Out, I highly recommend you check out the next Apple Event in October. Until then, start thinking about which of these products you might want to invest in when they are officially released. &nbsp;I personally would not be opposed to upgrading the hardware I have strapped to my wrist.&nbsp;</p>
                </Typography>
            </div>
            <div className={styles.body}>
                This article was published in University of Toronto's <i>The Mike</i>. You can find it &nbsp;
                <a style={{
                    color: "white"
                }}
                    href="https://readthemike.com/far-out-showcases-apples-newest-product-line/">here</a>.
                <p><br /></p>
            </div>
        </div>
    )
}

export default HowWrong;