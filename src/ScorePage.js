import React from 'react'
import { useLocation } from 'react-router-dom';
import "./ScorePage.css"
import { Link } from 'react-router-dom'; 

function ScorePage() {
    const location = useLocation();
    const totalScore = location.state.totalScore;
  return (
    <div className='container'>
            <div className='dig2-score'>
            <div className='timer1-score'>
                        <div className="timer-container-score">
                            <div className="timer-score">
                                <div className="timer-text-score">Total Score: {totalScore}</div>
                            </div>
                        </div>
                    </div>
                <div className='card1-score'>
                <Link to="/" className="back-button">Back to Main Page</Link>
                
                </div>
            </div>

            <div className='dig-score'>
            </div>
        </div>
  )
}

export default ScorePage
