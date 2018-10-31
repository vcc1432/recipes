import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import RecipesListContainer from './components/RecipesListContainer'
import RecipeDetailsContainer from './components/RecipeDetailsContainer'
import Home from './components/Home'
import TopNav from './components/TopNav'


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <TopNav />
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={RecipesListContainer} />
            <Route path="/recipes/:id" component={RecipeDetailsContainer} />
          </div>
      </Router>
    );
  }
}

export default App;
