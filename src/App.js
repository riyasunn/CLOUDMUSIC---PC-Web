import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import routes from './router/index';
import store from './store/index';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';



const App = memo(() => {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader />
                {renderRoutes(routes)}
                <AppFooter/>
            </HashRouter>
        </Provider>
    ); 
});

export default App;