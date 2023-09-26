import Mainpage from "./Mainpage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizPage from './QuizPage';
import ScorePage from "./ScorePage";


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Mainpage/>} />
        <Route path="/quiz/:quizName" element={<QuizPage/>} />
        <Route path="/score" element={<ScorePage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
