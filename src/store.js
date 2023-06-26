import { createStore } from 'redux';
import { quizReducer } from './reducers';

const store = createStore(quizReducer);

export default store;
