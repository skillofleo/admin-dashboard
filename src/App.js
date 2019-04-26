import React from 'react'
import 'bootstrap/scss/bootstrap.scss';
import './assets/styles/template.scss';


import {Router} from 'react-router-dom'
import { AppHistory } from './History';
import  Routes  from './components/RouteList';

const App = ({children}) => {
    return <>
    
      <Router history={AppHistory}>
        {children}

        <Routes/>
      </Router>
    </>
}

export default App