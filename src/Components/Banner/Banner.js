
import React,{useEffect, useState} from 'react'
import { API_KEY,imageURL } from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data.results[0]);
            setMovie(res.data.results.sort(function(a,b){return 0.5-Math.random()})[0]);
        })
        
    }, [])
    return (
        <div
        style={{backgroundImage:`url(${movie ?imageURL+movie.backdrop_path:""})`}}
        className='banner'>
<div className='content'>
    <h1 className='title'>{movie ? movie.title:""}</h1>
        <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>

        </div>
        <h1 className='discription'>{movie?movie.overview:""} </h1>
    </div>     
    <div className="fade_bottom"></div>       
        </div>
    )
}

export default Banner