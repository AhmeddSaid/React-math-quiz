const Score = ({ numCorrect, numQuestions }) => {
  return (
    <div className="score-text">
      <div>Your Score: {numCorrect}</div>
      <div>Question: {numQuestions}</div>
    </div>
  );
};

export default Score;
