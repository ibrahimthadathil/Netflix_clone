import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/assets/cards/Cards_data'
import {Link} from 'react-router-dom'



const TitleCards = ({title,category}) => {
  const [apiData,setApi]=useState([])
  const cardsref = useRef()
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2Y1MWRkNzQ5ZTM1NGU2ZjczZWU1NWY1NTEzYzE5NSIsIm5iZiI6MTcyMTA3MTAyMy4yMzE2MzEsInN1YiI6IjY2OTU3NDUxY2Y0ZWVhYjk5MWJmZjY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5a66huZPpS1iBCAv2hwbPbPzK8Y-fG1ifOZ3TlQJ3iU'
    }
  };
 

  const handlewheel =(event)=>{
  event.preventDefault()
  cardsref.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
     
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApi(response.results))
  .catch(err => console.error(err));

    cardsref.current.addEventListener('wheel',handlewheel)
  },[])

  return (
    
    <div className='Titlecards'>
       <h2>{title?title:'Popular on Netflix'}</h2>
       <div className="card-list" ref={cardsref}>
        {apiData.map((card,ind)=>{
          return <Link to={`/player/${card.id}`} className="card" key={ind}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })
        }
       </div>
    </div>
  )
}

export default TitleCards
