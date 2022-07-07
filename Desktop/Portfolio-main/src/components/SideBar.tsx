import { Typography } from '@mui/material';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from "react-router-dom";
import Nebula from "../assets/nebula.jpeg";
import styles from "../styles/SideBar.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = () => {

    const navigate = useNavigate();

    return (
        <div style={{ height: "800px" }}>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem><img src={Nebula} alt="nebula not found" className={styles.picture} /></MenuItem>
                    <MenuItem onClick={() => {
                        navigate("/");
                    }}>
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
                    <MenuItem onClick={() => {
                        navigate("/blog");
                    }} className={styles.menuItem}>
                        My Blog
                    </MenuItem>
                    <MenuItem onClick={() => {
                        navigate("/notes");
                    }} className={styles.menuItem}>
                        Stuff I'm Learning About
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
