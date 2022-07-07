import styles from "../../styles/BlogTitle.module.css";
import { useNavigate } from 'react-router-dom';

interface TitleProps {
    text: string;
    date: string;
    title: string;
}

const Title = ({ text, date, title }: TitleProps) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => { navigate(`/${title}`); }} style={{ textAlign: "left" }}>
            <div className={styles.date}>
                {date}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}

export default Title;