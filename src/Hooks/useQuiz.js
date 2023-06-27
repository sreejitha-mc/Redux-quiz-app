import { useDispatch } from 'react-redux';
import { nextQuestion, incrementScore } from '../components/Action';

const useQuiz = (currentQuestionIndex, score, questions) => {
  const dispatch = useDispatch();

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
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
    handleAnswer,
    getCurrentQuestion,
    isQuizCompleted,
  };
};

export default useQuiz;
