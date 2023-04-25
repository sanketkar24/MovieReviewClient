import React from "react"
import "./Header.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Dropdown, Space } from "antd"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';


const Header = () => {
    const [genre, setGenre] = useState([])
    // const items = [
    //     genre.map((item) => {
    //         return {
    //             key: item.id,
    //             label: (
    //                 <a href={`/movies/${item.name}`}>
    //                     {item.name}
    //                 </a>
    //             ),
    //         }
    //     })
    // ]
    let items = genre.map((item) =>
    ({
        key: item.id,
        label: (
            <a href={`/movies/${item.name}/${item.id}`}>
                {item.name}
            </a>
        ),
    }));
    console.log(items)
    useEffect(() => {
        getGenre()
    }, [])
    const getGenre = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then((data) => {
                setGenre(data.genres)
            })
    }
    console.log(genre)
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                 {/*<img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /> */}
                    <div className="logoText">
                    ROUTERs
                 </div>

                </Link>
                <Link to="/movies/popular/0" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                {/*<Link to="/movies/top_rated/0" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>*/}
                <Link to="/movies/now_playing/0" style={{ textDecoration: "none" }}><span>Now Playing</span></Link>
                <Link to="/movies/upcoming/0" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <span>
                            Categories
                            <DownOutlined />
                        </span>

                    </a>
                </Dropdown>

            </div>
            <div className="headerRight">
                <Link to="/ourteam" style={{ textDecoration: "none" }}><span>Our Team</span></Link>
                {
                    localStorage.getItem("token") ?
                        <Link to='/' onClick={() => {
                            localStorage.removeItem("token")

                            window.location.reload()
                        }} style={{ textDecoration: "none" }}><span>Logout</span></Link>
                        :
                        <Link to="/login" style={{ textDecoration: "none" }}><span>Login</span></Link>
                }
            </div>
        </div>
    )
}

export default Header