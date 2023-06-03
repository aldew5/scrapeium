import styles from "../styles/BlogTitle.module.css";


interface BookProps {
    title: string,
    author: string;
    date: string;
    rating: number;
    tags: Array<string>;
}

const Book = ({title, author, date, rating, tags}: BookProps) => {
    return (
        <div className={styles.booktext}>
            {title} by {author}
        </div>
    )
}

export default Book;