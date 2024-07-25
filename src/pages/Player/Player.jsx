import React, { useEffect, useState } from 'react'
import './player.css'
import backArrow from '../../assets/assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id} = useParams()
  const navigate = useNavigate()
const [apidata,setapi]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Y1MWRkNzQ5ZTM1NGU2ZjczZWU1NWY1NTEzYzE5NSIsIm5iZiI6MTcyMTA3MTAyMy4yMzE2MzEsInN1YiI6IjY2OTU3NDUxY2Y0ZWVhYjk5MWJmZjY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5a66huZPpS1iBCAv2hwbPbPzK8Y-fG1ifOZ3TlQJ3iU'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setapi(response.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={backArrow} onClick={()=>{navigate(-2)}} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player
