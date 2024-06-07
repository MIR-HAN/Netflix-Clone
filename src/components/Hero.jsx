import React from 'react'
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Error from './Error';
import { baseImgUrl } from '../constants';


const Hero = () => {

  const { isLoading, error, movies } = useSelector((store) =>
    store.movies);
  //create random number 0-19
  const i = Math.floor(Math.random() * movies.length);
  //get the one of random movie
  const movie = movies[i];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2
     md:max-h-[400px] gap-5 mb-5'>
      {!movie || isLoading? (
        <Loader />
      ) : error ? (
        <Error />) :
        (
          <>
            <div className='flex flex-col gap-6 items-center justify-center'>
              <h1 className='text-3xl font-bold'>{movie.title}</h1>
              <p className='text-start'>{movie.overview}</p>
              <p>
                <span>IMDB:</span>
                <span className='text-yellow-400 ms-2 font-semibold'>{movie.vote_average.toFixed(1)}</span>
              </p>

              <div className='flex gap-5'>
                <button className='p-2 bg-red-600 rounded hover:bg-red-700'>Watch The Movie</button>
                <button className='p-2 bg-blue-600 rounded hover:bg-blue-700'>Add To List</button>
              </div>
            </div>


            <div className='flex justify-center'>
              <img className='hero-img  my-4 img-fluid object-contain
              rounded max-h-[300px]' src={baseImgUrl + movie.backdrop_path} alt="poster" />
            </div>
          </>



        )}
    </div>
  )
}

export default Hero;