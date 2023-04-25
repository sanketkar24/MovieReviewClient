import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './ourTeam.css';
import sanketImg from '../../Images/Sanket.jpg';
import avikaImg from '../../Images/Avika.jpg';
import raviImg from '../../Images/Ravi.jpg';
import rakshakImg from '../../Images/Rakshak.jpg';
import imgex from '../../Images/Rakshak.jpg';

import { Carousel } from 'antd';
function OurTeam() {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    var width = windowSize.current[0];
    var height = windowSize.current[1];
    var counter = 0;
    const handleLoad = (e) => {
        counter++;
        console.log(counter);
        if (counter == 4)
            setLoading(false);
    }
    // useEffect(() => {
    //     console.log(counter)
    //     if(counter == 5)
    //         // setTimeout(() => setLoading(false), 3000);
    //         setLoading(false);
    //     //I mock loading with setTimeout,the skeleton disappears in 5 seconds

    // }, [counter])
    return (
        <div>
            <img src={sanketImg} style={{ display: 'none'}}
                onLoad={handleLoad}
            />
            <img src={avikaImg} style={{ display: 'none'}}
                onLoad={handleLoad}
            />
            <img src={rakshakImg} style={{ display: 'none'}}
                onLoad={handleLoad}
            />
            <img src={raviImg} style={{ display: 'none'}}
                onLoad={handleLoad}
            />
            {
                width >= 480 ?
                    <div className='ourTeamPage'>
                        <h1 id='fontHeading'>
                            Our
                            <span> Team</span>
                        </h1>
                        <br></br>
                        <div className='cardsUpper'>
                            {loading ?
                                <div className="cardTeam loading" id='loading'>
                                    <div className="image">

                                    </div>
                                    <div className="content">
                                        <h4></h4>
                                        <div className="description">

                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={sanketImg}
                                        />
                                    </div>
                                    <div className='cardText'>
                                        
                                        <h1>Sanket Kar</h1>
                                        <h2>200911264</h2>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.jpg' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.jpg' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/sanket_kar?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.jpg' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                // <div className='cardTeam'>
                                //     <img src={sakshatImg}></img>
                                //     <div className='cardText'>
                                //         <h2>Sakshat Gandhi</h2>
                                //         <h5>CEO</h5>
                                //         <div id='teamSocials'>
                                //             <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                //                 <img src='twitter_dark.png' id='socialImTeam' />
                                //             </a>
                                //             <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                //                 <img src='linkedin_dark.png' id='socialImgTeam' />
                                //             </a>
                                //             <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                //                 <img src='insta_dark.png' id='socialImgTeam' />
                                //             </a>
                                //         </div>
                                //     </div>
                                // </div>
                            }
                            {loading ?
                                <div className="cardTeam loading" id='loading'>
                                    <div className="image">

                                    </div>
                                    <div className="content">
                                        <h4></h4>
                                        <div className="description">

                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={avikaImg}
                                        />
                                    </div>
                                    <div className='cardText'>
                                        <h1>Avika Srivastava</h1>
                                        <h2>200911172</h2>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.jpg' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.jpg' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.jpg' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                loading ?
                                    <div className="cardTeam loading" id='loading'>
                                        <div className="image">

                                        </div>
                                        <div className="content">
                                            <h4></h4>
                                            <div className="description">

                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='cardTeam'>
                                        <div className='image'>
                                            <img src={rakshakImg} />
                                        </div>
                                        <div className='cardText'>
                                            <h1>Ghankota Sai Rakshak</h1>
                                            <h2>200911150</h2>
                                            <div id='teamSocials'>
                                                <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                    <img src='twitter_dark.jpg' id='socialImTeam' />
                                                </a>
                                                <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                    <img src='linkedin_dark.jpg' id='socialImgTeam' />
                                                </a>
                                                <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                    <img src='insta_dark.jpg' id='socialImgTeam' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className='cardsUpper'>
                            {
                                loading ?
                                    <div className="cardTeam loading" id='loading'>
                                        <div className="image">

                                        </div>
                                        <div className="content">
                                            <h4></h4>
                                            <div className="description">

                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='cardTeam'>
                                        <div className='image'>
                                            <img src={raviImg} />
                                        </div>
                                        <div className='cardText'>
                                            <h1>Ravi Sharma</h1>
                                            <h2>200911268</h2>
                                            <div id='teamSocials'>
                                                <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                    <img src='twitter_dark.jpg' id='socialImTeam' />
                                                </a>
                                                <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                    <img src='linkedin_dark.jpg' id='socialImgTeam' />
                                                </a>
                                                <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                    <img src='insta_dark.jpg' id='socialImgTeam' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            }
                            
                        </div>
                    </div>
                    :
                    <div className='ourTeamPage'>
                        <h1 id='fontHeading'>
                            Our
                            <span> Team</span>
                        </h1>
                        <h3> Dedicated to delivering experience meet our team</h3>
                        <div className='slideshow'>
                            <Carousel
                                width='100%'
                                effect='scrollx'>

                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={imgex}></img>
                                    </div>
                                    <div className='cardText'>
                                        <h2>Sakshat Gandhi</h2>
                                        <h5>CEO</h5>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.jpg' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.jpg' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.jpg' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={imgex}></img>
                                    </div>
                                    <div className='cardText'>
                                        <h2>Sanket Kar</h2>
                                        <h5>CTO</h5>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.png' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.png' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.png' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={imgex}></img>
                                    </div>
                                    <div className='cardText'>
                                        <h2>Dhara Bhasin</h2>
                                        <h5>CFO</h5>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.png' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.png' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.png' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={imgex}></img>
                                    </div>
                                    <div className='cardText'>
                                        <h2>Arihant Jain</h2>
                                        <h5>Head of Design</h5>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.png' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.png' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.png' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardTeam'>
                                    <div className='image'>
                                        <img src={imgex}></img>
                                    </div>
                                    <div className='cardText'>
                                        <h2>Siddharth Prakash</h2>
                                        <h5>COO</h5>
                                        <div id='teamSocials'>
                                            <a href='https://twitter.com/Baylink_in' target={'_blank'}>
                                                <img src='twitter_dark.png' id='socialImTeam' />
                                            </a>
                                            <a href='https://www.linkedin.com/company/baylink-in/' target={'_blank'}>
                                                <img src='linkedin_dark.png' id='socialImgTeam' />
                                            </a>
                                            <a href='https://instagram.com/baylink.in?igshid=YmMyMTA2M2Y=' target={'_blank'}>
                                                <img src='insta_dark.png' id='socialImgTeam' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
            }
        </div >
    )
}


export default OurTeam