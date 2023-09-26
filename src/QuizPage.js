import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './quizpage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import choiceImage from './assets/c3.png';
import rightImage from './assets/c1.png';
import wrongImage from './assets/c2.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
    const navigate = useNavigate();
    const { quizName } = useParams();
    const [currentTime, setCurrentTime] = useState(30);
    const [data, setData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [shuffledOptions, setShuffledOptions] = useState([]); 
    const [selected, setSelected] = useState(null);
    const [optionImages, setOptionImages] = useState(['choice', 'choice', 'choice', 'choice']);
    const [chance, setChance] = useState(0)
    const optionImageMap = {
        choice: choiceImage,
        right: rightImage,
        wrong: wrongImage,
    };

    const [totalScore, setTotalScore] = useState(0)

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (currentTime === 0) {
                if (currentQuestionIndex + 1 === 10) {
                    clearInterval(timerInterval);
                    navigate('/score', { state: { totalScore } });
                } else {
                    console.log(totalScore)
                    setCurrentTime(30);
                    shuffleOptions(data[currentQuestionIndex + 1]);
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setChance(0)
                    setOptionImages(['choice', 'choice', 'choice', 'choice']);

                }
            } else {
                setCurrentTime(currentTime - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [currentTime]);

    const fetchData = async () => {
        let apiUrl = '';

        if (quizName === 'sports') {
            apiUrl = 'https://opentdb.com/api.php?amount=10&category=21&type=multiple';
        } else if (quizName === 'space') {
            apiUrl = 'https://opentdb.com/api.php?amount=10&category=30&type=multiple';
        } else {
            apiUrl = 'https://opentdb.com/api.php?amount=10&category=23&type=multiple';
        }

        try {
            const response = await axios.get(apiUrl); 
            setData(response.data.results);
            console.log(response.data.results);
            shuffleOptions(response.data.results[0]);
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const shuffleOptions = (question) => {
        if (!question) {
            
            console.error('Question is undefined.');
            return;
        }
    
        const options = [...question.incorrect_answers, question.correct_answer];
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [options[i], options[j]] = [options[j], options[i]]; 
        }
        setShuffledOptions(options);
    };

    const clickFunction = (e, index) => {
        const selectedOption = shuffledOptions[index];
        const correctOption = data[currentQuestionIndex].correct_answer;
        const updatedImages = [...optionImages];

        if (selectedOption === correctOption) {
            updatedImages[index] = 'right';
            for (var i = 0; i < 4; i++) {
                if (index != i) {
                    updatedImages[i] = 'choice'
                }
            }
            setOptionImages(updatedImages);
            setTotalScore(totalScore + 10)
            setCurrentTime(0);

        } else {
            updatedImages[index] = 'wrong';
            for (var i = 0; i < 4; i++) {
                if (index != i) {
                    updatedImages[i] = 'choice'
                }
            }
            setOptionImages(updatedImages);
        }
        
        if (chance + 1 == 2) {
            setCurrentTime(0);
        }
        else{
            setChance(chance+1)  
        }


    }

    
    const renderQuestion = () => {
        const question = data[currentQuestionIndex];
        if (!question) {
            return null;
        }

        return (
            <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowWrap: 'anywhere' }}>
                <div className='qno'>
                    Question {currentQuestionIndex + 1}/{data.length}
                </div>
                <div style={{ textAlign: 'center', marginTop: '30%' }}>
                    {question.question}
                </div>
            </div>
        );
    };

    const renderOptions = () => {
        if (shuffledOptions.length === 0) {
            return null;
        }

        return (
            <div className='container' style={{ display: 'flex', flexDirection: 'column', paddingTop: '30%', overflow: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {shuffledOptions.map((option, index) => (
                    <button onClick={(e) => { clickFunction(e, index) }} style={{ borderColor: "#FFC000", background: 'white', borderRadius: "15px", width: '200px', minHeight: "40px", marginTop: index === 0 ? '0px' : '10px' }}>
                        <Row>
                            <Col xs={8}>{option}</Col>
                            <Col><img width='50%' id={"img" + index} src={optionImageMap[optionImages[index]]} alt="Choice" /></Col>
                        </Row>
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className='container'>
            <div className='dig2'>
                <div className='card1'>
                    <div className='timer1'>
                        <div className="timer-container">
                            <div className="timer">
                                <div className="timer-text">{currentTime}</div>
                            </div>
                        </div>
                    </div>
                    {renderQuestion()}
                </div>
            </div>

            <div className='dig'>
                {renderOptions()}
            </div>
        </div>
    );
}

export default QuizPage;
