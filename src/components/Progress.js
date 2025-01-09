function Progress({ index, numQuestions, points, questions, answer }) {
  const totalPoints = questions.reduce((total, question) => {
    return total + question.points;
  }, 0);

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
