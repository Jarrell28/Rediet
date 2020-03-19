import React, { Component } from 'react';
import './css/App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: "Home",

    }
  }

  onPageClick = (e) => {
    e.persist();
    const page = e.target.innerText;
    this.setState({ activePage: page })
  }

  render() {
    const { isLogginActive } = this.state;
    return (
      <Router>
        <div className="App">
          <div className="pattern"></div>
          <div className="login"></div>
          <div className="container">

            <NavBar click={this.onPageClick} currentPage={this.state.activePage} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Login" exact component={Login} />
            </Switch>


          </div>
          <div className="pattern"></div>
        </div>
      </Router>
    );
  }

}

export default App;
