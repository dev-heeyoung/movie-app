import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, img, title, year, summary, genres}) {
    return (
    <div key={id} className={styles.movie}>
        <img src={img} alt={title} className={styles.movie__img} />
        <div>
            <h2 className={styles.movie__title}>
                <Link to={`movie/${id}`}>{title}</Link>
            </h2>
            <div className={styles.movie__year}>{year}</div>
            <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
            <ul className={styles.movie__genres}>
                {genres.map((genre) => ( 
                    <li key={genre}>{genre}</li>
                ))}           
            </ul>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;