const initialState = {
  questions: [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'London', 'Berlin'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    },
    {
      question: 'How many vowels are there?',
      options: ['4', '5', '8', '3'],
      answer: '5'
    },{
      question: 'What is the color of carrot?',
      options: ['Red', 'Green', 'Orange', 'blue'],
      answer: 'Orange'
    },{
      question: 'Which drink contain caffeine?',
      options: ['Juice', 'Tea', 'Shake', 'Coffee'],
      answer: 'Coffee'
    }
  ],
  currentQuestionIndex: 0,
  score: 0,
};

const quizReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NEXT_QUESTION':
		  return {
			...state,
			currentQuestionIndex: state.currentQuestionIndex + 1,
		  };
		case 'INCREMENT_SCORE':
		  return {
			...state,
			score: state.score + 1,
		  };
		default:
		  return state;
	  }
}

export default quizReducer;

