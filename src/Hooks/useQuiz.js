// useQuiz.js
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, incrementScore } from '../components/Action';

const useQuiz = () => {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);
  const score = useSelector((state) => state.score);
  const questions = useSelector((state) => state.questions);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      dispatch(incrementScore());
    }

    dispatch(nextQuestion());
  };

  const getCurrentQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
      return null;
    }

    return questions[currentQuestionIndex];
  };

  const isQuizCompleted = () => currentQuestionIndex >= questions.length;

  return {
    currentQuestionIndex,
    score,
    handleAnswer,
    getCurrentQuestion,
    isQuizCompleted,
  };
};

export default useQuiz;
