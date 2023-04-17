import React, { Component } from "react";
//import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/reetika-sharma-6263901ba/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/reetika_sharma_08/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/Reetika2108">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Reetika</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Enthusiastic Learner",
                      "Full Stack Developer",
                      "Android Developer",
                      "Java Developer",
                      "React Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    pauseFor: 1000,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front end and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire me{" "}
            </button>
            <a
              href="ReetikaSharmaResume.pdf"
              download="ReetikaSharmaResume.pdf"
            >
              <button className="btn highlighted-btn" id ="abc">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
            
          </div>
        </div>
      </div>
    </div>
  );
}
