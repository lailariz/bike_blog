import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer sticky-footer">
        <div className="container">
          <span className="text-muted">{"\u00A9 Maddie Wiener & Ze'ev Lailari"}</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
