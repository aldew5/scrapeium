import { useState } from "react";
import book_list from '../../util/load_books';
import styles from "../../styles/BlogsAndNotes.module.css";
import Title from "../../components/BlogsAndNotes/Title";


interface Book {
    date: Date;
    author: string;
    rating: number;
    title: string;
    tags: Array<String>;
    isbn: string;
}

const List = () => {
    const [books, setBooks] = useState<Array<Book>>(book_list);

    return (
        <div style={{ color: "white", marginTop: "2rem", textAlign: "left" }}>
            <div className={styles.font}>
                The following are (probably) most of the books I've read in recent years.
                Some of these categories obviously don't make a lot of sense (economics and chess?).
                For some reason I decided that it was less embarrassing to make ridiculous groupings
                than have more categories with only a few entries.
                <p>Currently reading: <i>Klara and the Sun</i> by Kazuo Ishiguro</p>

                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"Mathematics, Physics and Computer Science"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (d.tags.includes("computer-science") ||
                                    d.tags.includes("mathematics") ||
                                    d.tags.includes("physics")) ?
                                    (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"General Science"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (d.tags.includes("science")) ?
                                    (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author} </li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"Classics and Literature"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (d.tags.includes("literature") || d.tags.includes("classics"))
                                    ? (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"Science Fiction"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (d.tags.includes("science-fiction")) ?
                                    (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"General Fiction"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (d.tags.includes("horror") ||
                                    d.tags.includes("historical-fiction") ||
                                    d.tags.includes("fantasy") ||
                                    d.tags.includes("fiction"))
                                    ? (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"Business and Biographies"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (
                                    d.tags.includes("business") ||
                                    d.tags.includes("biography"))
                                    ? (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"Biology, Philosophy, Linguistics and Psychology"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left" }}>
                        <ul>
                            {books.map(d => {
                                return (
                                    d.tags.includes("philosophy") ||
                                    d.tags.includes("psychology") ||
                                    d.tags.includes("linguistics") ||
                                    d.tags.includes("biology"))
                                    ? (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Title
                            date={""}
                            text={"Economics, History and Chess"}
                            title={""}
                            small={false}
                        />
                    </div>
                    <div style={{ textAlign: "left", paddingBottom: "4rem" }}>
                        <ul>
                            {books.map(d => {
                                return (
                                    d.tags.includes("economics") ||
                                    d.tags.includes("chess") ||
                                    d.tags.includes("history"))
                                    ? (<li key={d.isbn} style={{ marginBottom: "0.2rem" }}><i>{d.title}</i> by {d.author}</li>) : <div></div>
                            })}
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default List;