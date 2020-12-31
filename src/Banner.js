import React, { useState ,useEffect } from 'react';
import instance from './axios';
import requests from './requests';
import "./Banner.css";



function Banner() {

    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchTrending);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie.backdrop_path);
    const image = String(movie.backdrop_path);
    const path = 'https://image.tmdb.org/t/p/original' + image;
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
   
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: 'url("'+path+'")',
                backgroundPosition: "center center",
                marginTop:"-21",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie.title || movie.name || movie.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">
                            Play
                        </button>
                        <button className="banner_button">
                        My List
                        </button>
                </div>
                <h1 className ="banner_description">
                   {truncate(movie.overview, 150)}
                </h1>
                
            </div>
          <div className ="banner--fadeBottom"></div>  
        </header>
    )
}

export default Banner
