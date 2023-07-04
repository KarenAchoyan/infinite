import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="place-footer">
          <img src={'logo.png'} alt=""/>
          <h4>High Service For Every Customer</h4>
        </div>
        <div className="place-footer">
          <h4>Pages</h4>
          <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Vehicles</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="place-footer">
          <h4>Contact Us</h4>
          <ul>
            <li>Address</li>
            <li>infinite@co</li>
            <li>+123123123</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>WEB design by <a href="#">GeekLab</a></p>
        </div>
        <div></div>
      </div>

    </footer>
  );
};

export default Footer;