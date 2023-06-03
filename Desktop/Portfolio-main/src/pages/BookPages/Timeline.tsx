import styles from "../../styles/BlogsAndNotes.module.css";
import Title from "../../components/BlogsAndNotes/Title";
import { MathComponent } from "mathjax-react";

const Timeline = () => {

    return (
        <div style={{ color: "white", marginTop: "2rem", paddingBottom: "2rem", textAlign: "left" }}>
            <div className={styles.font}>
                These are the books I've read most recently and ones I'm planning on reading soon.
                I will try to rate them all and write short reviews. Sometimes I read multiple books
                at the same time so it might not be the case that I read book <MathComponent display={false} tex={String.raw`b_{i}`}></MathComponent> in <MathComponent display={false} tex={String.raw`t_{i} - t_{i-1}`}></MathComponent> days
                where <MathComponent display={false} tex={String.raw`t_{i}`}></MathComponent> is the date I finished book <MathComponent display={false} tex={String.raw`i`}></MathComponent>.
                Note that clicking on the bolded titles will take you to my review and rating. Reviews for the
                other books are forthcoming.
                <p>Currently reading: <i>Klara and the Sun</i> by Kazuo Ishiguro</p>
            </div>
            <div style={{ marginBottom: "1rem", marginTop: "4rem" }}>
                <Title
                    date={""}
                    text={"Spring 2023"}
                    title={""}
                    small={false}
                />
                <div style={{ marginLeft: '2rem' }}>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"June 2, 2023"}
                            text={"The Pearl By John Steinbeck"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"June 2, 2023"}
                            text={"War and Peace Volume 2 by Leo Tolstoy"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 24, 2023"}
                            text={"The Handmaid's Tale by Margaret Atwood"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 21, 2023"}
                            text={"The Metamorphosis and Other Stories by Franz Kafka"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 16, 2023"}
                            text={"The Hitchhiker's Guide to the Galaxy by Douglas Adams"}
                            title={"hitchhiker"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 13, 2023"}
                            text={"Slaughterhouse-Five by Kurt Vonnegut"}
                            title={"slaughter"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 7, 2023"}
                            text={"A Clockwork Orange by Anthony Burgess"}
                            title={"orange"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 5, 2023"}
                            text={"Brave New World by Aldous Huxley"}
                            title={"brave"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"May 2, 2023"}
                            text={"War and Peace Volume 1 by Leo Tolstoy"}
                            title={"war"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"April 15, 2023"}
                            text={"Applied Combinatorics by Mitchel T. Keller"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"April 10, 2023"}
                            text={"Calculus by Michael Spivak"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"April 6, 2023"}
                            text={"Linear Algebra Done Right by Sheldon Axler"}
                            title={"algebra"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"March 24, 2023"}
                            text={"Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character by Richard Feynman"}
                            title={"feynman"}
                            small={true}
                        />
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "1rem", marginTop: "4rem" }}>
                <Title
                    date={""}
                    text={"Winter 2022-2023"}
                    title={""}
                    small={false}
                />
                <div style={{ marginLeft: '2rem' }}>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"March 12, 2023"}
                            text={"The Old Man and the Sea by Ernest Hemingway"}
                            title={"sea"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"March 4, 2023"}
                            text={"The God Delusion by Richard Dawkins"}
                            title={"delusion"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"January 19, 2023"}
                            text={"East of Eden by John Steinbeck"}
                            title={"eden"}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Title
                            date={"December 25, 2022"}
                            text={"The Republic by Plato"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Title
                            date={"December 19, 2022"}
                            text={"Essentials of Linguistics by Catherine Anderson"}
                            title={""}
                            small={true}
                        />
                    </div>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Title
                            date={"December 8, 2022"}
                            text={"The Sounds of Language: An Introduction to Phonetics by Henry Rogers"}
                            title={""}
                            small={true}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Timeline;