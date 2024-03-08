import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import FYP from "../assets/img/project-img1.png";
import ExpenseTracker from "../assets/img/Expensetracker.png";
import Lottery from "../assets/img/lottery.png";
import CrowdFunding from "../assets/img/Crowdfunding.png";
import Event from "../assets/img/event.png";
import ContactManager from "../assets/img/contact.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import h1 from "../assets/img/h1.png";
import h2 from "../assets/img/h2.png";
import h3 from "../assets/img/h3.png";
import h4 from "../assets/img/h4.png";
import h5 from "../assets/img/h5.png";
import h6 from "../assets/img/h6.png";
import h7 from "../assets/img/h7.png";
import h8 from "../assets/img/h8.png";
import h9 from "../assets/img/h9.png";
import h10 from "../assets/img/h10.png";
import h11 from "../assets/img/h11.png";
import h12 from "../assets/img/h12.png";
import h13 from "../assets/img/h13.png";
import h14 from "../assets/img/h14.png";
import h15 from "../assets/img/h15.png";
import h16 from "../assets/img/h16.png";
import h17 from "../assets/img/h17.png";
import h18 from "../assets/img/h18.png";
import h19 from "../assets/img/h19.png";
import h20 from "../assets/img/h20.png";
import h21 from "../assets/img/h21.png";
import h22 from "../assets/img/h22.png";
import h23 from "../assets/img/h23.png";
import h24 from "../assets/img/h24.png";
import h25 from "../assets/img/h25.png";
import h26 from "../assets/img/h26.png";
import h27 from "../assets/img/h27.png";
import h28 from "../assets/img/h28.png";
import h29 from "../assets/img/h29.png";
import h30 from "../assets/img/h30.png";
import h31 from "../assets/img/h31.png";
import h32 from "../assets/img/h32.png";
export const Projects = () => {
  const projects = [
    {
      title: "NFT Based Degree Issuance and Verification System",
      description: "Final Year Project -A Blockchain Based Web application for issuing and verifying degrees",
      imgUrl: FYP,
    },
    {
      title: "React Expense Tracker",
      description: "A React Project Used to Track Expenses ",
      imgUrl: ExpenseTracker,
    },
    {
      title: "Lottery Smart Contract",
      description: "A MultiSignature Solidity Smart Contract of Lottery System",
      imgUrl: Lottery,
    },
    {
      title: "CrowdFunding Smart Contract",
      description: "A MultiSignature Solidity Smart Contract for Funding",
      imgUrl: CrowdFunding,
    },
    {
      title: "Event Orgainzer Smart Contract",
      description: "A MultiSignature Solidity Smart Contract for Organizing and Managing Events",
      imgUrl: Event,
    },
    {
      title: "Contact Manager Project",
      description: "A backend based Node.js project where user different users and register and login to save contacts information",
      imgUrl:ContactManager,
    },

    {
      title: "PortFolio Website",
      description: "A Simple Portfolio website in HTML CSS AND JS",
      imgUrl: h15,
    },
    {
      title: "Stylish Image Gallery",
      description: "A slick image gallery with a cool hover effect",
      imgUrl: h17,
    },
    {
      title: "Subscription Newsletter Website",
      description: "A simple html and css website with newsletter subscription",
      imgUrl:h20,
    },
    {
      title: "SignIn & SignUp page",
      description: "A Professional Sign In and Sign Up Page Build Using Html Css and Js ",
      imgUrl: h32,
    },
    {
      title: "Image Slider",
      description: "Image Silder with cool transition & and hover effect",
      imgUrl: h18,
    },
    {
      title: "Crypto Currency Page",
      description: "A simple html and css website with live crypto currency information",
      imgUrl:h28,
    },
  ];

  const project2 = [
    {
      title: "Weather App",
      description: "A simple weather app using HTML Css and Js and OpenWeatherMap API",
      imgUrl: h1,
    },
    {
      title: "Todo App",
      description: "A simple todo app using HTML Css and Js",
      imgUrl: h2,
    },
    {
      title: "Simple Quiz App",
      description: "A simple quiz app using HTML Css and Js",
      imgUrl: h3,
    },

    {
      title: "Generate Random Passwords",
      description: "A simple password generator using HTML Css and Js",
      imgUrl: h4,
    },
    {
      title: "Notebook App",
      description: "A simple notebook app using HTML Css and Js",
      imgUrl: h5,
    },
    {
      title: "Age Calculator",
      description: "A simple age calculator using HTML Css and Js",
      imgUrl: h6,
    },

    {
      title: "Random Quotes Generator",
      description: "A simple random quotes generator using HTML Css and Js",
      imgUrl: h7,
    },
    {
      title: "QR Code Generator",
      description: "QR code generator using HTML Css and Js",
      imgUrl: h8,
    },
    {
      title: "SignUp Page",
      description: "A Professional Sign Up Page Build Using Html Css and Js",
      imgUrl: h9,
    },

    {
      title: "Music Player",
      description: "A simple music player using HTML Css and Js",
      imgUrl: h10,
    },
    {
      title: "Stop Watch",
      description: "A simple stop watch using HTML Css and Js",
      imgUrl: h11,
    },
    {
      title: "Custom Notification",
      description: "A simple custom notification using HTML Css and Js",
      imgUrl: h13,
    },

    {
      title: "Login Page",
      description: "A Simple Login Page Build Using Html Css and Js with Password hide and show functionality",
      imgUrl: h14,
    },
    {
      title: "Contact Form",
      description: "A simple contact form using HTML Css and Js",
      imgUrl: h31,
    },
    {
      title: "Contact Form",
      description: "A simple contact form using HTML Css and Js with validation",
      imgUrl: h16,
    },
  ];

  const project3 = [
    {
      title: "Text To Voice Converter",
      description: "A simple text to voice app using HTML Css and Js",
      imgUrl: h21,
    },
    {
      title: "Launch Countdown Timer",
      description: "A simple launch countdown timer using HTML Css and Js",
      imgUrl: h22,
    },
    {
      title: "Mini Calendar",
      description: "A simple mini calendar using HTML Css and Js",
      imgUrl: h23,
    },

    {
      title: "Custom Menu Bar",
      description: "A Custom Menu bar using HTML Css and Js",
      imgUrl: h24,
    },
    {
      title: "Custom Circular Progress Bar",
      description: "Custom Circular Progress Bar using HTML Css and Js",
      imgUrl: h25,
    },
    {
      title: "Image Search Engine",
      description: "Image Search Engine using HTML Css and Js",
      imgUrl: h26,
    },

    {
      title: "Custom Order Form",
      description: "Custom Order Form using HTML Css and Js",
      imgUrl: h27,
    },
    {
      title: "Digital Clock",
      description: "A simple digital clock using HTML Css and Js",
      imgUrl: h29,
    },
    {
      title: "Drag and Drop",
      description: "A simple drag and drop using HTML Css and Js",
      imgUrl: h30,
    },

  
  
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore some of the projects I've been involved in,
                    showcasing a range of skills and experiences. From web
                    development to data analysis, each project represents a
                    unique challenge and opportunity for learning and growth.
                    Feel free to click on the tabs to learn more about each
                    project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {project3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
