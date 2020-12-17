import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <div id="info">
        <h2>Projects</h2>
        <MYR />
        <SoarCS />
        <CSPathways />
        <CSConnections />
        <ContactMe />
      </div>
    </div>
  );
}

class Header extends React.Component{
  render() {
    return (
      <div>
        <header>
          <div className="App">
            <h1>Elena K Izotova</h1>
            <section id="bio">
              <p>
                K-12 Computer Science Education Enthusiast, Mother, Yogini.
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
    );
  }
}

class ContactMe extends React.Component{
  render() {
    return (
      <div>
          <h3>Contact Me</h3>
          <p>
            E-mail:&nbsp;
                <a href="mailto:elena@elenaizotova.com" rel="noopener noreferrer" target="_blank">elena@elenaizotova.com</a>
          </p>

        </div>
    );
  }
}

class MYR extends React.Component{
  render(){
    return(
      <article>
          <a href="https://learnmyr.org/" rel="noopener noreferrer" target="_blank" class="title">MYR.js:</a>
          <img src={require("./imgs/MYR_Chem.png")} alt="MYR molecules" style={{ width: "50%" }} class="right" />
          <h5>Front and back-end developer
          <br /> Spring 2018 - Fall 2019</h5>
          <h5>Curriculum Creator and Educator
          <br /> Spring 2019 - Present</h5>
          
          <br />
          <p>
            <b>Abstract:</b>
            <br />MYR is a browser-based, educational platform built to spark student interest
            in computer science by allowing users to write code that generates three-dimensional, animated scenes in
            virtual reality. The interface consists of two primary components: (1) an integrated editor, which leverages
            the MYR API and the A-Frame entity-component-system, and (2) a real-time renderer that displays the corresponding
            scene. The scenes, which vary in complexity, are viewable using virtual reality headsets, smartphones, and
            any device that supports a web browser.
            
            <br /><br />By providing access to the specific domain of virtual reality to students,
            the system aims to make computer science concepts tangible for novice programmers. The MYR development team conducted
            pilot tests with middle school students in order to collect feedback from this audience. The larger goal of the project
            is to develop MYR as a research tool to gain insight into computing students’ success, motivation,
            and confidence in learning computing.
            
            <br /><br />
            <a href="https://learnmyr.org/about/sigcse/myr-web-based-platform-vr.pdf" rel="noopener noreferrer" target="_blank">Read the full MYR intsrument paper here.</a>
            <br />
            <a href="learnmyr.org" rel="noopener noreferrer" target="_blank">Learn about and play with MYR at LearnMYR.org.</a>
          </p>
        </article>
    );
  }
}

class SoarCS extends React.Component{
  render(){
    return(
      <article>
          <a href="https://www.uml.edu/sciences/soarcs.aspx" rel="noopener noreferrer" target="_blank" class="title">SoarCS:</a>
          <img src={require("./imgs/SoarCS_Logo.png")} alt="SoarCS Logo" style={{ width: "40%" }} class="right" />
          <h5>Curriculum Creator, Lecturer
          <br />Summer 2019 & 2020</h5>
          
          <br />
          <p>
            <br />SoarCS is a bridge program for all full time computer science students starting their first year at the
            University of Massachusetts Lowell. During the Summer 2019 program, students stayed at the dorms at UML, and
            my coworkers and I led lectures and guided students through their own programming projects for all four days of
            the conference. We taught students programming concepts using micro:bits, Anki Cozmo Robots, and MYR.
            During the Summer 2020 program, we led the conference over the course of four weeks virtually due to COVID-19.
            Instead of using Cozmos, we taught python and web APIs using Google Colaboratory. We were able to send the
            students micro:bits, and fostered a sense of community over Discord starting weeks before the event.
            
            <br /><br />
            <a href="https://www.uml.edu/sciences/soarcs.aspx" rel="noopener noreferrer" target="_blank">Read more about the program here.</a>
          </p>
        </article>
    );
  }
}

class CSConnections extends React.Component{
  render(){
    return(
      <article>
          <a href="https://sites.google.com/view/csconnections/home" rel="noopener noreferrer" target="_blank" class="title">CS Connections:</a>
          <img src={require("./imgs/CSConnections.png")} alt="CS Connections Logo" style={{ width: "20%" }} class="right" />
          <h5> Project Guide
          <br />August 2018</h5>
          
          <br />
          <p>
            <br />CS Connections is a workshop for middle school teachers to learn how to incorporate computer science learning into
            all subject areas. The teachers were taught how to use MIT's App Inventor, Scratch, and micro:bit, and my coworkers and I aided
            the teachers in completing projects and understanding computer science concepts using those tools.
            
            <br /><br />
            <a href="https://sites.google.com/view/csconnections/home" rel="noopener noreferrer" target="_blank">Read more about the workshop here.</a>
          </p>
        </article>
    );
  }
}

class CSPathways extends React.Component{
  render(){
    return(
      <article>
          <a href="https://cspathways.org/" rel="noopener noreferrer" target="_blank" class="title">CS Pathways:</a>
          <h5> Instructor and Guide for Students and Teachers
          <br />Summer 2018 & Spring 2020</h5>
          
          <br />
          <p>
            <br /> CS Pathways is a partnership between the University of Massachusetts Lowell and urban school districts to help create middle
            school computer science programs. Working under Dr. Fred Martin, I guided students through making apps using MIT's App Inventor
            <a href="https://cspathways.org/families/" rel="noopener noreferrer" target="_blank"> during two week long summer camps in 2018</a>.
            Later on in 2020, I was an assistant for the <a href="https://cspathways.org/2019/11/06/cs-pathways-rpp-funded-by-nsf/" rel="noopener noreferrer" target="_blank">
            CS Pathways RPP project</a>, helping educate middle school teachers in CS concepts, brainstorming MIT App Inventor projects for
            their current curricula, and debugging their own project attempts.
            
            <br /><br />
            <a href="https://cspathways.org/about" rel="noopener noreferrer" target="_blank">Read more about the partnership here.</a>
          </p>
        </article>
    );
  }
}



export default App;
