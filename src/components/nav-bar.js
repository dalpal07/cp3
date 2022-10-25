import React from 'react';
import './nav-bar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
          <nav>
              <div id="logo">Young Learning</div>
              <div className={this.props.page === "Home" ? "selected clickable" : "clickable"}
              onClick={this.props.onClick}>Home</div>
              <div className={this.props.page === "Play" ? "selected clickable" : "clickable"}
              onClick={this.props.onClick}>Play</div>
              <div className={this.props.page === "About" ? "selected clickable" : "clickable"}
              onClick={this.props.onClick}>About</div>
          </nav>
    );
  }
}

export default NavBar;