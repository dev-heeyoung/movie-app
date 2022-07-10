import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetail from '../component/MovieDetail';

function Detail() {
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ movie, setMovie ] = useState({});

    const getMovie = async () => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
          ).json();
          console.log(json.data.movie);

          setMovie(json.data.movie);
          setLoading(false);
    }

    useEffect(() => {
        getMovie()
    }, []);
    
    return (
        <div>
            { loading ? (
                <div>Loading...</div>
                )
                : (
                <div>
                    <MovieDetail
                        key={movie.id}
                        id={movie.id}
                        img={movie.large_cover_image} 
                        title={movie.title} 
                        year={movie.year}
                        genres={movie.genres}
                        rating={movie.rating}
                        runtime={movie.runtime}
                        description={movie.description_full} 
                         />
                </div>
            )
            }
        </div>
    )
}

export default Detail;