import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import EvensOrOdds from './projects/evens-or-odds';
import Reaction from './projects/reaction';
import Header from './components/Header';
import './index.css';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path='/jokes' render={() => <Header><Jokes/></Header>} />
            <Route path='/music-master' render={() => <Header><MusicMaster/></Header>} />
            <Route path='/evens-or-odds' render={() => <Header><EvensOrOdds/></Header>} />
            <Route path='/reaction' render={() => <Header><Reaction/></Header>} />
            <Route exact path='/' render={() => <Header><App/></Header>} /> 
        </Switch>
    </Router>, document.getElementById('root'));

// new Promise((resolve, reject) => {
//     return reject(new Error ('No return'));
//     setTimeout(() => {
//         resolve('111. 2222. 33333');
//     }, 2000);
// }).then((quote) => {
//     console.log(quote);
// }).catch(error => console.log('error', error));



