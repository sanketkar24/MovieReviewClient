import React, { useEffect, useState } from "react"
import "./movie.css"
import { Link, useParams } from "react-router-dom"
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Comment } from '@ant-design/compatible';
import { Form, Button, List, Input, message } from 'antd';
import { Avatar, Tooltip } from 'antd';
import moment from 'moment';
import ReactStars from 'react-stars'
const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);
const Movie = () => {
    const [currentMovieDetail, setMovie] = useState('')
    const [comments, setComments] = useState([])
    const [input, setInput] = useState('')
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [rating, setRating] = useState(0)
    const [username, setUsername] = useState('')
    const [cast, setCast] = useState([])

    const [stars, setStars] = useState(0)
    const ratingChanged = (newRating) => {
        setRating(newRating)
        console.log(newRating)
    }

    const handleChange = e => {
        setInput({
            value: e.target.value,
        });
    };
    const loadUserData = e => {
        console.log(localStorage.getItem('token'))
        //write http get message here with bearer token
        fetch(`http://localhost:3000/posts/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => res.json())
            .then(data => {
                // setMovie(data)
                console.log(data)

                setUsername(data.val[0].username)
            }
            )
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(input.value)
        console.log(rating)
        // write http post message here 
        fetch(`http://localhost:3000/posts/postReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                review: input.value,
                movie_id: id,
                score: rating
            })
        }).then(res => res.json())
            .then(data => {
                message.success('Review Posted')
                //function with 2 second delay
                setTimeout(() => {
                    window.location.reload()
                }, [2000])
                console.log(data)
            }
            )

    }
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {React.createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];
    const { id } = useParams()

    useEffect(() => {
        getData()
        getComments()
        loadUserData()
        getDataStars()
        getCastAPI()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }
    const getCastAPI = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.cast)
                setCast(data.cast)
            })
    }
    console.log(cast)
    const getDataStars = () => {
        fetch(`http://localhost:3000/posts/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setStars(data.results[0].score)

            });
    }
    const getComments = () => {
        fetch(`http://localhost:3000/posts/getReview/${id}`)
            .then(res => res.json())
            .then(data => {
                // setMovie(data)
                console.log('comments')
                var starSum;
                for (let i = 0; i < data.val.length; i++) {
                    console.log(data.val[i].score)
                    var localStar = parseInt(localStar)
                    starSum = localStar + starSum;
                }
                console.log(starSum)
                starSum = starSum / data.val.length;
                setStars(starSum)

                console.log(data)
                setComments(data.val)
            })
    }

    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" alt='imgName' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" alt='imgName' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className="movie__rating">
                                {/*currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" /> */}
                                {stars}<i class="fas fa-star" />
                                {/*<span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span> */}
                            </div>
                            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                            <div className="movie__genres">
                                {currentMovieDetail && currentMovieDetail.genres
                                    ?
                                    currentMovieDetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""}
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <span><div style={{ marginBottom: '1rem' }}>{currentMovieDetail ? currentMovieDetail.overview : ""}</div></span>

                            <div className="synopsisText">Cast</div>

                            <div>
                            
                            {
                                
                                currentMovieDetail ?

                                    cast.map((val, index) => (
                                                <span className="movie__cast" id={val.id}>
                                                    <a href= {`https://image.tmdb.org/t/p/original/${val.profile_path}`} target='_blank'
                                                    style={
                                                        {
                                                            color: "white",
                                                        }
                                                    } >
                                                    {val.name}, </a>
                                                </span>

                                    ))
                                    :
                                    ""}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="movie__links">
                    <div className="movie__heading">Useful Links</div>
                    {currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>}
                    {currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>}
                </div>
                <div className="movie__heading">Production companies</div><div className="movie__production">
                    {currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>}
                        </>
                    ))}
                </div>
                <div className="movie__heading">
                    Reviews

                </div>
                <div className="linebreak">
                    {comments.length} Reviews
                </div>

                <hr style={{ color: "white", width: '80%', marginBottom: '3rem' }} />


                {comments && comments.map(comment => (
                    <>
                        <Comment
                            style={{ width: "80%", marginBottom: "1rem" }}
                            actions={actions}
                            author={<a>{comment.username}</a>}
                            avatar={
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                />
                            }
                            content={
                                <div>
                                    <ReactStars
                                        size={'20px'}
                                        count={5}
                                        half={true}
                                        value={comment.score}
                                        edit={false}
                                        // onChange={ratingChanged}
                                        // size={ '20px' }
                                        color2={'#ffd700'}
                                    />
                                    <p>
                                        {comment.review}
                                    </p>
                                </div>

                            }
                            datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        />

                    </>

                ))}

                {username ?
                    <Comment
                        style={{ width: "80%", resize: "none" }}
                        author={username}
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <>
                                <ReactStars
                                    count={5}
                                    half={false}
                                    edit={true}
                                    onChange={ratingChanged}
                                    size={'20px'}
                                    color2={'#ffd700'}
                                />
                                <Editor
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                // submitting={submitting}
                                // value={value}
                                />
                            </>

                        }
                    />
                    :
                    <Link to='/login'>
                        <Button type="primary" size={'large'}>
                            Login to comment
                        </Button>
                    </Link>
                }
            </div>
        </>
    )
}

export default Movie;