import React from 'react';
import { connect } from 'react-redux';
import useQuiz from '../Hooks/useQuiz';
import '../style.css';

const QuizApp = ({ currentQuestionIndex, score, questions, dispatch }) => {
  const { handleAnswer, getCurrentQuestion, isQuizCompleted } = useQuiz(
    currentQuestionIndex,
    score,
    questions,
    dispatch
  );

  const currentQuestion = getCurrentQuestion();

  if (isQuizCompleted()) {
    return (
      <div className="quiz-completed">
        <h2>Quiz completed!</h2>
        <p>Your score: {score}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="question">Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <ul className="options">
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentQuestionIndex: state.currentQuestionIndex,
    score: state.score,
    questions: state.questions,
  };
};

export default connect(mapStateToProps)(QuizApp);
