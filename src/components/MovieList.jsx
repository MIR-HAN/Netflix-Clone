import React, { useEffect, useState } from 'react';
import api from "../utils/api";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from '../constants';
import { Link } from 'react-router-dom';


const MovieList = ({ genre }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const params = {
            with_genres: genre.id,
        }
        api.get("discover/movie", { params })
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    }, [])


    return (
        <div className='my-10 '>
            <h1 className='text-3xl mb-3'>{genre.name}</h1>

            <Splide options={{
                autoWidth: true,
                gap: '10px',
                pagination: false,
                lazyLoad: true,
            }} >
                {movies.map((movie,i) => (
                    <SplideSlide key={i}>
                        <Link to={`/movie/${movie.id}`} >
                            <img
                                className='max-w-[300px] h-full cursor-pointer rounded'
                                src={baseImgUrl.concat(movie.poster_path)} alt={movie.title} />
                                </Link>

                    </SplideSlide>
                ))}
            </Splide>


        </div>
    )
}

export default MovieList