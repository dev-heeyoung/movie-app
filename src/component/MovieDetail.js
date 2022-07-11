import PropTypes from "prop-types"
import styles from "./MovieDetail.module.css";


function MovieDetail({img, title, url, year, rating, runtime, description, genres}) {
    return (
    <div className={styles.movie}>
        <div>
            <img src={img} alt={title} className={styles.movie__img}/>
            <a href={url}>
                <button>Download</button>
            </a>
        </div>
        <div>
            <h2 className={styles.movie__title}>{title}</h2>
            <p className={styles.movie__year}>{year}</p>
            <ul className={styles.movie__genres}>
            {genres.map((genre) => ( 
                <li key={genre}>{genre}</li>
            ))}           
        </ul>
            <p>★ {rating} / 10</p>
            <p>Running Time: {runtime}</p>
            <p>{description}</p>
        </div>
        
        

    </div>
    )
}

MovieDetail.propTypes = {
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;