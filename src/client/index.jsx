
import React from 'react';
import ReactDOM from 'react-dom';
import HashRouter from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';

import Home from './containers/Home.jsx';
import TopRated from './containers/TopRated.jsx';
import MoviePage from './containers/MoviePage.jsx';
import ErrorPage from './containers/ErrorPage.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let store = createStore(appReducer);

const muiTheme = getMuiTheme({ palette: { primary1Color: '#01d277' } });

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <HashRouter>
                <div>
                    <Route path="/" component={Home}/>
                    <Route path="/top-rated" component={TopRated}/>
                    <Route path="/movie/:id" component={MoviePage}/>
                    <Route path="/error" component={ErrorPage}/>
                </div>
            </HashRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
