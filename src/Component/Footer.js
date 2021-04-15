import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="learn">
        <h3>LEARN</h3>
        <div className="row">
          <div>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Dairy Dictionary</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="/">Health & Wellness</a>
              </li>
              <li>
                <a href="/">Sustainability</a>
              </li>
              <li>
                <a href="/">Facts & Myths</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="/">Life on the Farm</a>
              </li>
              <li>
                <a href="/">Recipes</a>
              </li>
              <li>
                <a href="/">Resource Library</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact">
        <p>
          If you have any question or comments about any of the content of this
          site, please contact us.{" "}
        </p>
        <div className="social-media-links">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-pinterest"></a>
          <a href="#" className="fa fa-facebook"></a>
          <button className="contact-btn"> Contact Us </button>
        </div>
        <p className="para-color">
          <i className="fa fa-copyright"></i>2018 Dairy Management Inc.{" "}
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </p>
        <p className="para-color">
          Visit our content partner <a href="">NDC</a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
