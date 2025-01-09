function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = points / maxPossiblePoints;

  return (
    <p className="result">
      you scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
