import Title from "../../components/BlogsAndNotes/Title";
import styles from "../../styles/BlogsAndNotes.module.css";


const Favourites = () => {

    return (
        <div>
            <div style={{ color: "white", marginTop: "2rem", textAlign: "left" }}>
                <div className={styles.font}>
                    These are my favourite books thus far. I'm sure that this list will change quite
                    regularly but I highly doubt that <i>East of Eden</i> will ever be removed from it.
                    Click the titles to see my reviews.
                </div>
            </div>
            <div className={styles.blogs}>
                <Title
                    date={"January 19, 2023"}
                    text={"1. East of Eden by John Steinbeck"}
                    title={"eden"}
                    small={false}
                />
            </div>
            <div className={styles.blogs}>
                <Title
                    date={"March 23, 2023"}
                    text={"2. Surely You're Joking Mr. Feynman! by Richard Feynman"}
                    title={"feynman"}
                    small={false}
                />
            </div>
            <div className={styles.blogs}>
                <Title
                    date={"June 20, 2022"}
                    text={"3. A Tale of Two Cities by Charles Dickens"}
                    title={"cities"}
                    small={false}
                />
            </div>
            <div className={styles.blogs}>
                <Title
                    date={"August 15, 2021"}
                    text={"4. Crime and Punishment by Fyodor Dostoevsky"}
                    title={"crime"}
                    small={false}
                />
            </div>
            <div style={{marginBottom: "4rem"}} className={styles.blogs}>
                <Title
                    date={"August 17, 2021"}
                    text={"5. Animal Farm by George Orwell"}
                    title={"animal"}
                    small={false}
                />
            </div>
        </div>
    )
}

export default Favourites;