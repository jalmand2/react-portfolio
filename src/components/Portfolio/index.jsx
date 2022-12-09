import React from 'react';
import WavesOverWork from '../images/waves.png';
import AnimeTracker from '../images/animetracker.png';
import NoteTaker from '../images/notetaker.png';
import WorkScheduler from '../images/workscheduler.jpg';
import WeatherDash from '../images/weatherdashboard.png';
import CodeQuiz from '../images/codingquiz.jpg';

const Portfolio = () => {
    return (
        <div class="container row container-fluid projectBg " style={{margin: 'auto', alignContent: 'flex-start', justifyContent:'center'}}>
        <div class="card" style={{width: '18rem', backgroundColor: '#a99985ff'}}>
        <img class="card-img-top" src={WavesOverWork} alt="Waves over Work"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Waves over Work</h5>
          <p class="card-text text-center">This was a collaborative, frontend project.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/MariaYConstanza/beach-day" class="btn btn-secondary">Github</a>
          <a href="https://mariayconstanza.github.io/beach-day/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem', backgroundColor: '#a99985ff'}}>
        <img class="card-img-top" src={AnimeTracker} alt="Anime Tracker"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Anime Tracker</h5>
          <p class="card-text text-center">This was a collaborative, fullstack project. </p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/Tab-Y/anime-tracker" class="btn btn-secondary">Github</a>
          <a href="https://anime-tracker-11-2022.herokuapp.com/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem', backgroundColor: '#a99985ff'}}>
        <img class="card-img-top" src={NoteTaker} alt="Note Taker"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Note Taker</h5>
          <p class="card-text text-center">A backend-focused application using Express.js.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/jalmand2/Note-Taker" class="btn btn-secondary">Github</a>
          <a href="https://murmuring-anchorage-44494.herokuapp.com/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem', backgroundColor: '#a99985ff'}}>
        <img class="card-img-top" src={WorkScheduler} alt="Work Scheduler"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Work Scheduler</h5>
          <p class="card-text text-center">A calendar application using HTML and CSS via jQuery.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/jalmand2/Work-Day-Scheduler" class="btn btn-secondary">Github</a>
          <a href="https://jalmand2.github.io/Work-Day-Scheduler/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem', backgroundColor: '#a99985ff'}}>
        <img class="card-img-top" src={WeatherDash} alt="Weather Dashboard"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Weather Dashboard</h5>
          <p class="card-text text-center">An application using the Open Weather API.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/jalmand2/Weather-Dashboard-App" class="btn btn-secondary">Github</a>
          <a href="https://jalmand2.github.io/Weather-Dashboard-App/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem', backgroundColor: '#a99985ff'}}>
        <img class="card-img-top" src={CodeQuiz} alt="Coding Quiz"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Coding Quiz</h5>
          <p class="card-text text-center">A quiz application using HTML, CSS, and JavaScript.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/jalmand2/Coding-Quiz" class="btn btn-secondary">Github</a>
          <a href="https://jalmand2.github.io/Coding-Quiz/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Portfolio;