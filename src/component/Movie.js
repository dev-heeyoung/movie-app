import PropTypes from "prop-types"

function Movie({id, img, title, summary, genres}) {
    return (
    <div key={id}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map((genre) => ( 
                <li key={genre}>{genre}</li>
            ))}           
        </ul>
    </div>
    )
}

Movie.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;