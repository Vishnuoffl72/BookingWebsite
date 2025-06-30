import React from 'react'
import '../pages/Movies.css'
import { dummyShowsData}from '../assets/assets.js'

const Movies = () => {



  return (
    <>
    <div className="content">
      {dummyShowsData.map((show)=>{
        return (
          <div className="card">
            <div className="poster-img">
              <img src={show.backdrop_path} alt="" style={{borderRadius: '10px'}} />
            </div>

            <div className="title">
              <h2>Guardians of galaxy</h2>
            </div>

            <div className="details">
              <p>2018</p>
              <p>Action . Adventure</p>
              <p>2h20min</p>
            </div>

            <div className="action">
              <button>Buy Tickets</button>
              <p>rating</p>
            </div>
          </div>
        );
      })}
      
    </div>
    </>
  )
}

export default Movies