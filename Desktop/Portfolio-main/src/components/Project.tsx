import styles from "../styles/Project.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

import Experiment from "../assets/experiment.png";
import Aruco from "../assets/aruco.png";
import Ashbury from "../assets/book.jpeg";
import FallingBlocks from "../assets/falling_blocks.png";
import Deworlde from "../assets/dewordle.png";

interface ProjectProps {
    image: string,
    text: string;
}

const Project = ({ image, text }: ProjectProps) => {

    const [display, setDisplay] = useState<any>();

    const navigate = useNavigate();

    const handleClick = () => {
        if (image === "tvl") {
            navigate("/tvlExperiment");
        } else if (image === "aruco") {
            navigate("/arcvision");
        } else if (image === "book") {
            navigate("/ashburyBook");
        } else if (image === "falling_blocks") {
            navigate("/fallingblocks");
        } else if (image === "dewordle") {
            navigate("/dewordle");
        }
    }

    useEffect(() => {
        if (image === "tvl") {
            setDisplay(Experiment);
        } else if (image === "aruco") {
            setDisplay(Aruco);
        } else if (image === "book") {
            setDisplay(Ashbury);
        } else if (image === "falling_blocks") {
            setDisplay(FallingBlocks);
        } else if (image === "dewordle") {
            setDisplay(Deworlde);
        }
    }, [])

    return (
        <div className={styles.container}>
            <Card sx={{ width: 250, height: 280, alignContent: "center" }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            height: "180px",
                            objectFit: "contain"
                        }}
                        image={display}
                        alt="not found"
                    />
                    <Typography variant="body1" className={styles.text}>{text}</Typography>
                </CardContent>
                <Box className={styles.text}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}>
                        View Project
                    </Button>
                </Box>
            </Card>
        </div>
    )
}

export default Project;