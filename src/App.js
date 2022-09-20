import { useState } from "react";
import "./App.css";
import Score from "./Score";
import Game from "./Game";

const App = () => {
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);

  const handleAnswer = (answerWasCorrect) => {
    if (answerWasCorrect) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setNumQuestions(numQuestions + 1);
  };

  return (
    <div className="App">
      <div className="game">
        <h2 className="title">Mental Math</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numCorrect={correctAnswer} numQuestions={numQuestions} />
      </div>
    </div>
  );
};

export default App;
