import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetail from '../component/MovieDetail';
import styles from './Detail.module.css';

function Detail() {
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ movie, setMovie ] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
          ).json();

          setMovie(json.data.movie);
          setLoading(false);
    }

    useEffect(() => {
        getMovie()
    }, []);
    
    return (
        <div className={styles.container}>
            { loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
                )
                : (
                <div className={styles.movie}>
                    <MovieDetail
                        img={movie.medium_cover_image} 
                        url={movie.url}
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