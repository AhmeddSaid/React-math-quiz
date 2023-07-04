import { useEffect, useState } from "react";
import "./App.css";
import Score from "./Score";
import Game from "./Game";

const App = () => {
  const scoreInitialValue = localStorage.getItem("score") || "0";
  const questionsInitialValue = localStorage.getItem("question") || "0";

  const [correctAnswer, setCorrectAnswer] = useState(parseInt(scoreInitialValue));
  const [numQuestions, setNumQuestions] = useState(parseInt(questionsInitialValue));

  const handleAnswer = (answerWasCorrect) => {
    if (answerWasCorrect) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setNumQuestions(numQuestions + 1);
  };

  useEffect(() => {
    localStorage.setItem("score", correctAnswer.toString());
    localStorage.setItem("question", numQuestions.toString());
  }, [correctAnswer, numQuestions]);

  return (
    <div className="App">
      <div className="game">
        <h2 className="title">Math Game</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numCorrect={correctAnswer} numQuestions={numQuestions} />
      </div>
    </div>
  );
};

export default App;
