import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import styles from "../styles/BlogsAndNotes.module.css";
import BookMenu from "../components/BlogsAndNotes/BookMenu";
import Favourites from "./BookPages/Favourites";
import List from "./BookPages/List";
import Timeline from "./BookPages/Timeline";
import { Dispatch, SetStateAction } from "react";

interface ReadingProps {
    favourites: boolean;
    timeline: boolean;
    list: boolean;
    setTimeline: Dispatch<SetStateAction<boolean>>;
    setList: Dispatch<SetStateAction<boolean>>;
    setFavourites: Dispatch<SetStateAction<boolean>>;
}


const Reading = ({ favourites, timeline, list, setTimeline, setList, setFavourites }: ReadingProps) => {

    return (
        <div style={{ height: "100%", display: "flex"}}>
            <div className={styles.bar}>
            </div>
            <div className={styles.title}>
                <div>
                    <Typography variant="h4" color="white"
                        style={{
                            marginBottom: "2rem",
                        }}>
                        Alec Dewulf's Bookshelf
                    </Typography>
                    <Typography variant="body1" color="white"
                        style={{
                            marginBottom: "1rem",
                        }}>
                        "That’s not how he wanted the story to go &mdash; and he wouldn’t
                        have any other story. So he tore up the world." - John Steinbeck
                    </Typography>
                    <div >
                        <BookMenu
                            setList={setList}
                            setFavourites={setFavourites}
                            setTimeline={setTimeline}
                        />
                    </div>
                </div>
                <div>
                    {(favourites) ? <Favourites /> : <div>{(list) ? <List /> : <Timeline />}</div>}
                </div>
            </div>
        </div>
    )
}

export default Reading;