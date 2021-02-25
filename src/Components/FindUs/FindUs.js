import React from 'react';
import googlemap from "../../Images/Icon/google-maps.png";
import waze from "../../Images/Icon/waze.png";

const FindUs = () => {
    return (
        // <>
          <section id="findus">
              <div className="find-container">
              <h2>MANAA?</h2>
              <h5>We're located at Rasta @ TTDI! Look for a <span>yellow</span> food truck, say Hello to us!</h5>
                  <div className="find-wrapper">
                      <div className="find-img-wrapper">
                      <iframe src="https://www.google.com/maps/d/embed?mid=1ReJd8nbY9aeDhfvcxf73U28ticQ" width="640" height="480"></iframe>
                      </div>
                      <div className="btn-container">
                      <div className="btn-wrapper">
                        <a href="https://goo.gl/maps/6rujrLw1gMPvnexw5"><button className="gmap"><img src={googlemap} alt=""/></button></a>
                      </div>
                      <div className="btn-wrapper2">
                        <a href="https://ul.waze.com/ul?ll=3.15901600%2C101.62540696&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"><button className="waze"><img src={waze} alt=""/></button></a>
                      </div>
                      </div>
                  </div>
              </div>
          </section>  
        // </>
    )
}

export default FindUs;
