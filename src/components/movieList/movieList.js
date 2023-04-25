import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type, id } = useParams()
    console.log(type, id)
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        if (type === undefined || type === "popular") {
            fetch(`http://localhost:3000/posts/getpopular`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    setMovieList(data.results)
                })
        }
        else if(type === "top_rated" || type === "upcoming" || type==="now_playing"){
            fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
                .then(res => res.json())
                .then(data => setMovieList(data.results))
        }
        else {
            console.log(type)
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=${id}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    setMovieList(data.results)
                })
        }
        
    }

    return (
        <div className="movie__list">
            {console.log(type)}
            <h2 className="list__title">
            {
                (type ? 
                    type ==="now_playing"? "NOW PLAYING": type
                    : 
                    "POPULAR"
                    ).toUpperCase()}
            </h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList