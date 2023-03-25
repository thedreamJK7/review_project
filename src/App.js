import { useState } from 'react';
import './App.css';
import reviews from './data';
import {FaQuoteRight} from 'react-icons/fa'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
function App() {
  const [state, setState] = useState(0)
  
  const previousBtn = () => {
    if(state === reviews.length - 1){
      setState(0)
    } else {
      setState(state + 1);
    }
  }
  const NextBtn = () => {
    if (state === 0) {
      setState(reviews.length - 1);
    } else {
      setState(state - 1);
    }
  };
  const {id, name, job, image, text} = reviews[state]
  return (
    <main>
      <div className="container">
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4>{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button onClick={() => previousBtn()} className="prev-btn">
              <GrFormPrevious />
            </button>
            <button onClick={() => NextBtn()} className="next-btn">
              <GrFormNext />
            </button>
          </div>
          <button className="random-btn" onClick={()=> {
            let randomNumber = Math.random()*reviews.length
            if(randomNumber === state) {
              randomNumber = Math.random() * reviews.length;
            }
            setState(Math.round(randomNumber))
          }}>Surprise me</button>
        </article>
      </div>
    </main>
  );
}

export default App;
