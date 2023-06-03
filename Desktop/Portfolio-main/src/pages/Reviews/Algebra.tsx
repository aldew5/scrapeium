import { useNavigate } from "react-router-dom";
import styles from "../../styles/Entries.module.css";
import { Typography } from "@mui/material";

const Algebra = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.text}>
            <div className={styles.title}>
                <i>Linear Algebra Done Right</i> by Sheldon Axler
                <hr />
            </div>
            <div className={styles.container}>
                <div className={styles.date}>
                    April 6, 2023
                </div>
                <div className={styles.link} onClick={() => { navigate("/reading") }}>
                    See all posts
                </div>
                <div className={styles.body}>
                    <Typography variant="body1">
                        <p>Rating: 4.5/5</p>
                        <p>
                        I read this book as part of my undergraduate degree in math (specifically, it was required reading for Algebra I and II&mdash;MAT240 and MAT247, respectively&mdash;at UofT). I think the "done right" part emphasizes the obvious absence of the determinant in all but one chapter of the book (the last chapter). The determinant-free proofs were nice, but from my naive perspective, it seems perhaps a little excessive to leave the introduction of such an important concept to the last chapter. Axler demonstrated that one can go far without the determinant, but the concept frequently appears in many other texts and contexts. The purported pedagogical benefit of the layout prevents the reader from properly understanding more traditional texts on linear algebra as quickly.

                        </p>
                        <p>
                        The book is very thorough and explains everything very well. It builds from the basics of linear algebra to abstract vector spaces. Then Axler moves on to inner product spaces, discussing orthonormality, operators and, of course, the spectral theorem for normal operators. Notably, Axler does not include the spectral resolution formulation of the theorem, which makes its links to functional calculus more clear. He also does not go into much discussion of the spectral properties of self-adjoint or orthogonal operators. A very nice proof of singular value decomposition is included, and this important result is nicely explained from a theoretical standpoint. There is no focus on application to algorithms or other disciplines of applied math; the book is purely theoretical.
                        </p>
                        <p>I would definitely recommend Axler to those looking for a rigorous introduction to abstract linear algebra. I would, however, suggest that they take a peek at Chapter 10 (determinants) in between Chapters 5 and 6.
                        </p>
                    </Typography>

                </div>
            </div>

        </div>

    )
}

export default Algebra;
