import React from 'react';
//import Home from './screens/Home/Home'
import NotFound from './screens/NotFound/NotFound'
//import Page from './screens/Page/Page'
import './App.scss';
import MyAppBar from './components/MyAppBar/MyAppBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router className="remove-outline">
      <MyAppBar/>
        <Switch>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
