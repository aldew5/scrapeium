import styles from "../../styles/BlogTitle.module.css";
import { useNavigate } from 'react-router-dom';

interface TitleProps {
    text: string;
    date: string;
    title: string;
    small: boolean;
}

const Title = ({ text, date, title, small }: TitleProps) => {

    const navigate = useNavigate();

    return (
        <div>
            {(date !== "") ?
                <div onClick={() => { if (title !== "") navigate(`/${title}`); }} style={{ textAlign: "left" }}>
                    <div className={(small) ? styles.sdate : styles.date}>
                        {date}
                    </div>
                    <div>
                        {(small) ?
                            <div className={(title !== "") ? styles.small_hover : styles.small}>
                                {text}
                            </div>
                            :
                            <div className={styles.text}>
                                {text}
                            </div>
                        }
                    </div>

                </div>
                :
                <div style={{ textAlign: "left" }}>
                    <div className={(small) ? styles.sdate : styles.date}>
                        {date}
                    </div>
                    <div className={(small) ? styles.small : styles.text2}>
                        {text}
                    </div>
                </div>
            }
        </div>
    )
}

export default Title;