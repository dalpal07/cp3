import React from 'react';
import './home.css';
import kids from './kids-on-pencil.png'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
          <div>
          <h1>Welcome to Young Learning</h1>
          <img id="home-img" src={kids}/>
          <div id="home-info">
            Welcome to Young Learning where we take care of all your child's needs. We're here to give your child
            the best opportunity to excel in all aspects of their learning. They will get a head start on becoming
            a little Einstein!<br/><br/>
            Please visit our "Play" tab so that your child can get started on their learning right now! There are
            so many games and activities to try, so start now!<br/><br/>
            Feel free to also visit our "About" tab to learn more about Young Learning's aims as a company. You will
            also find out more about our founder and how we began. We hope you enjoy!
          </div>
        </div>
    );
  }
}

export default Home;