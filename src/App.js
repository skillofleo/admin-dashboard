import React from 'react'
import 'bootstrap/scss/bootstrap.scss';
import './assets/styles/template.scss';


import {Router} from 'react-router-dom'
import { AppHistory } from './History';
import  Routes  from './components/RouteList';
import GlobalContextProvider from './contexts/GlobalContext';

const App = ({children}) => {
    return <>
    <GlobalContextProvider>
      <Router history={AppHistory}>
        {children}

        <Routes/>
      </Router>
    </GlobalContextProvider>
    </>
}

export default App