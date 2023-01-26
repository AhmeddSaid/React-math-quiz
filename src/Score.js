const Score = ({ numCorrect, numQuestions }) => {
  return (
    <div className="score-text">
      <div>Score: {numCorrect}</div>
      <div>Question: {numQuestions}</div>
    </div>
  );
};

export default Score;
