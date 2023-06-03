import { Typography } from '@mui/material';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from "react-router-dom";
import Profile from "../assets/profile.png";
import styles from "../styles/SideBar.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import 'react-pro-sidebar/dist/css/styles.css';
import {
    Dispatch,
    SetStateAction,
} from "react";


interface SidebarProps {
    showBar: boolean;
    setShowBar: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({ setShowBar, showBar }: SidebarProps) => {

    const navigate = useNavigate();

    return (
        <div style={{ height: "100%" }}>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem>
                        <div style={{ display: "flex" }}>
                            <img src={Profile} alt="nebula not found" className={styles.picture} />
                        </div>
                        <div style={{
                            display: "flex", position: "absolute", right: "0", marginRight: "10px",
                            top: "0", marginTop: "15px"
                        }}>
                            <CloseIcon
                                onClick={() => { setShowBar(!showBar); }}
                            />
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <Typography color="white" className={styles.name}>Alec </Typography>
                    </MenuItem>
                    <Typography className={styles.description} style={{
                        marginBottom: "2rem", marginLeft: "0.2rem"
                    }}>Student</Typography>
                    <MenuItem onClick={() => {
                        navigate("/about");
                    }} className={styles.menuItem}>
                        About
                    </MenuItem>
                    <MenuItem onClick={() => {
                        navigate("/profile");
                    }} className={styles.menuItem}>
                        Things I've Built
                    </MenuItem>
                    {/* <MenuItem onClick={() => {
                        navigate("/blog");
                    }} className={styles.menuItem}>
                        My Blog
                    </MenuItem> */}
                    <MenuItem onClick={() => {
                        navigate("/publications");
                    }} className={styles.menuItem}>
                        Publications
                    </MenuItem>
                    <MenuItem onClick={() => {
                        navigate("/notes");
                    }} className={styles.menuItem}>
                        Stuff I'm Learning About
                    </MenuItem>
                    <MenuItem onClick={() => {
                        navigate("/reading");
                    }} className={styles.menuItem}>
                        Things I've Read
                    </MenuItem>
                    <MenuItem onClick={() => {
                        navigate("/contact");
                    }} className={styles.menuItem}>
                        Contact Me
                    </MenuItem>
                    <MenuItem onClick={() => {
                        window.location.href = "https://www.linkedin.com/in/alec-dewulf-45133a1a5/";
                    }} className={styles.linkedin}>
                        <LinkedInIcon />
                    </MenuItem>
                    <MenuItem onClick={() => {
                        window.location.href = "https://github.com/aldew5";
                    }} className={styles.github}>
                        <GitHubIcon />
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default SideBar;
