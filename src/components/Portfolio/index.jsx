import React from 'react';
import '../Portfolio/portfolio.css';
import WavesOverWork from '../images/waves.png';
import AnimeTracker from '../images/animetracker.png';
import Codemates from '../images/p3-screenshot.png';
import WorkScheduler from '../images/workscheduler.jpg';
import WeatherDash from '../images/weatherdashboard.png';
import CodeQuiz from '../images/codingquiz.jpg';

const Portfolio = () => {
  return (
    <div class="container row container-fluid" style={{ margin: 'auto', marginTop: '40px', alignContent: 'flex-start', justifyContent: 'center' }}>
       <div class="row">
                <h1 style={{ color: 'rgb(52, 43, 30)', textAlign: 'center' }}>My Work</h1>
            </div>
      <div class="card navBorder" style={{ width: '14rem', margin: '20px' }}>
        <img class="card-img-top animate glow delay-1" src={WavesOverWork} alt="Waves over Work"></img>
        <div class="card-body animate glow delay-1">
          <h5 class="card-title text-center">Waves over Work</h5>
          <p class="card-text text-center">This was a collaborative, frontend project.</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://github.com/MariaYConstanza/beach-day" class="btn btn-secondary">Github</a>
            <a href="https://mariayconstanza.github.io/beach-day/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card navBorder" style={{ width: '14rem', margin: '20px' }}>
        <img class="card-img-top" src={AnimeTracker} alt="Anime Tracker"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Anime Tracker</h5>
          <p class="card-text text-center">This was a collaborative, fullstack project. </p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://github.com/Tab-Y/anime-tracker" class="btn btn-secondary">Github</a>
            <a href="https://anime-tracker-11-2022.herokuapp.com/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card navBorder" style={{ width: '14rem', margin: '20px' }}>
        <img class="card-img-top" src={Codemates} alt="Note Taker"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Codemates</h5>
          <p class="card-text text-center">A MERN Fullstack Application.</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://github.com/Tab-Y/codemates" class="btn btn-secondary">Github</a>
            <a href="https://codemates-app.herokuapp.com/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card navBorder" style={{ width: '14rem', margin: '20px' }}>
        <img class="card-img-top" src={WorkScheduler} alt="Work Scheduler"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Work Scheduler</h5>
          <p class="card-text text-center">A calendar application using HTML and CSS via jQuery.</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://github.com/jalmand2/Work-Day-Scheduler" class="btn btn-secondary">Github</a>
            <a href="https://jalmand2.github.io/Work-Day-Scheduler/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card navBorder" style={{ width: '14rem', margin: '20px' }}>
        <img class="card-img-top" src={WeatherDash} alt="Weather Dashboard"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Weather Dashboard</h5>
          <p class="card-text text-center">An application using the Open Weather API.</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://github.com/jalmand2/Weather-Dashboard-App" class="btn btn-secondary">Github</a>
            <a href="https://jalmand2.github.io/Weather-Dashboard-App/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card navBorder" style={{ width: '14rem', margin: '20px' }}>
        <img class="card-img-top" src={CodeQuiz} alt="Coding Quiz"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Coding Quiz</h5>
          <p class="card-text text-center">A quiz application using HTML, CSS, and JavaScript.</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="https://github.com/jalmand2/Coding-Quiz" class="btn btn-secondary">Github</a>
            <a href="https://jalmand2.github.io/Coding-Quiz/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;