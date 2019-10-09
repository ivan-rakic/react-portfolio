import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));


// console.log('store - ', store);
// console.log('store.getState - ', store.getState());

// store.subscribe(() => console.log('store.getState - ', store.getState()));

// store.dispatch(startGame());
// store.dispatch(showInstructions());
// store.dispatch(cancelGame());
// store.dispatch(hideInstructions());

const EvensOrOdds = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default EvensOrOdds;
