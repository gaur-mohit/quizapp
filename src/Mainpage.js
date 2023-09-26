import React, { useState } from 'react';
import './Mainpage.css';
import img1 from './assets/q1.png';
import img2 from './assets/q2.png';
import img3 from './assets/q3.png';
import { Link } from 'react-router-dom';

function Mainpage() {
    const [temp, setTemp] = useState([1, 2, 3]);

    return (
        <div className='container'>
            <div className='dig2'>
                <div className='name'>Hello Kirat</div>
                <div className='pop'>Popular</div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Link to="/quiz/space">
                        <button className='box'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                <div className='text'>Space</div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img className='image' src={img2} alt='Image Description' />
                                </div>
                            </div>
                        </button>
                    </Link>
                    <Link to="/quiz/history">
                    <button className='box'>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                            <div className='text'>History</div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img className='image' src={img3} alt='Image Description' />
                            </div>
                        </div>
                    </button>
                    </Link>
                    <Link to="/quiz/sports">
                    <button className='box'>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                            <div className='text'>Sports</div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img className='image' src={img1} alt='Image Description' />
                            </div>
                        </div>
                    </button>
                    </Link>
                </div>
            </div>
            <div className='dig'>
                <div className='container'>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", marginTop: '20px' }}>
                        <div style={{ marginRight: "120px", fontWeight: 'bold', textAlign: 'left' }}>
                            Explore
                        </div>
                        <div style={{ alignContent: 'right', marginRight: "10px" }}>
                            View All
                        </div>
                    </div>
                </div>

                {temp.map((i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Link to="/quiz/space">
                        <button className='box1'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                <div className='text'>Space</div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img className='image' src={img2} alt='Image Description' />
                                </div>
                            </div>
                        </button>
                        </Link>
                        <Link to="/quiz/history">
                        <button className='box1'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                <div className='text'>History</div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img className='image' src={img3} alt='Image Description' />
                                </div>
                            </div>
                        </button>
                        </Link>
                        <Link to="/quiz/sports">
                        <button className='box1'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
                                <div className='text'>Sports</div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img className='image' src={img1} alt='Image Description' />
                                </div>
                            </div>
                        </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mainpage;
