import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function MovieDetail({id, img, title, year, rating, runtime, description, genres}) {
    return (
    <div key={id}>
        <img src={img} alt={title} />
        <h2><Link to={`movie/${id}`}>{title}</Link></h2>
        <p>{year}</p>
        <p>{rating}</p>
        <p>{runtime}</p>
        <p>{description}</p>
        <ul>
            {genres.map((genre) => ( 
                <li key={genre}>{genre}</li>
            ))}           
        </ul>
    </div>
    )
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;