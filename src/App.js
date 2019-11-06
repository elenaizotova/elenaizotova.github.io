import React from 'react';
import './App.css';

function App() {
  const MYR = require("./imgs/MYR_Chem.png");
  return (
    <div className="page">
      <div>
        <header>
          <div className="App">
            <h1>Elena K. Izotova</h1>
            <section id="bio">
              <p>
                Undergraduate student and researcher at the University of Massachusetts Lowell, developing interactive educational tools
                for K-12 young learners of Computer Science.
          </p>
              <nav class="menu" role="nav">
                <ul>
                  <li>
                    <a href="https://github.com/elenaizotova" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/elenaizotova/" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </header>
        <footer></footer>
      </div>
      <div id="info">
        <h2>Projects</h2>
        <article>

          <a href="https://learnmyr.org/" rel="noopener noreferrer" target="_blank" class="title">MYR.js:</a>
          <img src={MYR} alt="MYR molecules" style={{ width: "95%" }} class="center" />
          <h4>Front and back-end developer
                    <br /> February 2018 - Present</h4>
          <p>
            <b>Abstract:</b>
            <br /> &nbsp; &nbsp; &nbsp; &nbsp; MYR is a browser-based, educational platform built to spark student interest
            in computer science by allowing users to write code that generates three-dimensional, animated scenes in
            virtual reality. The interface consists of two primary components: (1) an integrated editor, which leverages
            the MYR API and the A-Frame entity-component-system, and (2) a real-time renderer that displays the corresponding
            scene. The scenes, which vary in complexity, are viewable using virtual reality headsets, smartphones, and
            any device that supports a web browser.
                        <br /> &nbsp; &nbsp; &nbsp; &nbsp;By providing access to the specific domain of virtual reality to students,
the system aims to make computer science concepts tangible for novice programmers. The MYR development team conducted
pilot tests with middle school students in order to collect feedback from this audience. The larger goal of the project
is to develop MYR as a research tool to gain insight into computing students’ success, motivation,
and confidence in learning computing.
                        <br />
            <br />
            <a href="https://learnmyr.org/about/sigcse/myr-web-based-platform-vr.pdf" rel="noopener noreferrer" target="_blank">Read the full paper here.</a>
          </p>

        </article>
        <div>
          <h3>Contact Me</h3>
          <p>
            E-mail:&nbsp;
                <a href="mailto:elena@elenaizotova.com" rel="noopener noreferrer" target="_blank">elena@elenaizotova.com</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;
