import styles from "../styles/TopBar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "./SideBar";
import {
    Dispatch,
    SetStateAction,
} from "react";

interface TopBarProps {
    showBar: boolean;
    setShowBar: Dispatch<SetStateAction<boolean>>
}


const TopBar = ({showBar, setShowBar}: TopBarProps) => {

    const handleClick = () => {
        setShowBar(!showBar);
    }

    return (
        <div className={styles.container}>

            <div className={styles.text}>
                Alec Dewulf's Blog
            </div>

            <div className={styles.button}>
                <MenuIcon
                    sx={{
                        "&:hover": {
                            cursor: "pointer"
                        }
                    }}
                    onClick={handleClick}
                />
            </div>


        </div>
    )

}

export default TopBar;