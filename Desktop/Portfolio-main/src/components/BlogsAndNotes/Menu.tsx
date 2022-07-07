import styles from "../../styles/Menu.module.css";
import {
    Dispatch,
    SetStateAction,
} from "react";

interface MenuProps {
    setMath: Dispatch<SetStateAction<boolean>>;
    setScience: Dispatch<SetStateAction<boolean>>;
    setScifi: Dispatch<SetStateAction<boolean>>;
    setGeneral: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setMath, setScience, setScifi, setGeneral }: MenuProps) => {
    return (
        <>
            <hr />
            <div style={{ display: "flex" }}>
                <div className={styles.field} onClick={() => {
                    setMath(false);
                    setScifi(false);
                    setGeneral(false);
                    setScience(true);
                }}>Science</div>
                <div className={styles.field} onClick={() => {
                    setMath(true);
                    setScifi(false);
                    setGeneral(false);
                    setScience(false);
                }}>Math</div>
                <div className={styles.field} onClick={() => {
                    setMath(false);
                    setScifi(true);
                    setGeneral(false);
                    setScience(false);
                }}>Sci-fi</div>
                <div className={styles.field} onClick={() => {
                    setMath(false);
                    setScifi(false);
                    setGeneral(true);
                    setScience(false);
                }}>General</div>
            </div>
        </>
    )
}

export default Menu;