import React, {Component} from 'react';
import './css/App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activePage: "Home"
    }
  }

  onPageClick = (e) => {
    // e.persist();
    const page = e.target.innerText;
    this.setState({activePage: page})
  }

  render(){
    return (
      <div className="container">
        <NavBar click={this.onPageClick} currentPage={this.state.activePage}/>
      </div>
    );
  }
  
}

export default App;
