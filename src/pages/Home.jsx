import React from 'react'
import './Home.css'
import marvellogo from '../assets/marvelLogo.svg'

const Home = () => {
  return (
    <div className='home-bg'>
      <div className="logo-img">
        <img src={marvellogo} alt="" />
      </div>
      <div className="title-text">
        <h1>Guardins <br/> of the Galaxy</h1>
      </div>
      <div class="tags">
        <span>Action</span>
        <span>|</span>
        <span>Adventure</span>
        <span>|</span>
        <span>Sci-Fi</span>
        <span style={{marginLeft:'20px'}}>📅 2018</span>
        <span style={{marginLeft:'20px'}}>⏱️ 2h 8m</span>
      </div>
      <p>
        In a post-apocalyptic world where cities ride on wheels and <br/> consume each
        other to survive, two people meet in London and <br/> try to stop a conspiracy.
      </p>
      <div className="btn-space">

      <button class="explore-btn">Explore Movies →</button>
      </div>
    </div>
  )
}

export default Home

