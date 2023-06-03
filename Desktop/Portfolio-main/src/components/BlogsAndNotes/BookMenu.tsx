import styles from "../../styles/Menu.module.css";
import {
    Dispatch,
    SetStateAction,
} from "react";

interface MenuProps {
    setFavourites: Dispatch<SetStateAction<boolean>>;
    setList: Dispatch<SetStateAction<boolean>>;
    setTimeline: Dispatch<SetStateAction<boolean>>;
}

const BookMenu = ({ setFavourites, setList, setTimeline }: MenuProps) => {
    return (
        <>
            <hr />
            <div style={{ display: "flex" }}>
                <div className={styles.field} onClick={() => {
                    setFavourites(true);
                    setList(false);
                    setTimeline(false);
                }}>Favourites</div>
                <div className={styles.field} onClick={() => {
                    setList(true);
                    setFavourites(false);
                    setTimeline(false);
                }}>My Books</div>
                <div className={styles.field} onClick={() => {
                    setTimeline(true);
                    setFavourites(false);
                    setList(false);
                }}>Timeline</div>
            </div>
        </>
    )
}

export default BookMenu;