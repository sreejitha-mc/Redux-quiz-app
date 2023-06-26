export const nextQuestion = () => {

  console.log('in action')
  return {
    type: 'NEXT_QUESTION',
  };
};

export const incrementScore = () => {
  console.log('in action increment')
  return {
    type: 'INCREMENT_SCORE',
  };
};
