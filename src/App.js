import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import routes from './router/index';
import store from './store/index';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import PlayerBar from './pages/player/player-bar';



const App = memo(() => {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader />
                {renderRoutes(routes)}
                <AppFooter/>
                <PlayerBar />
            </HashRouter>
        </Provider>
    ); 
});

export default App;