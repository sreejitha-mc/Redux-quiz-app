import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import quizReducer from './reducers';
import App from "./App";

const store = createStore(quizReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <div className="container">
    <App />
    </div>
    
  </Provider>
  );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
