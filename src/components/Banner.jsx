import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const toRotate = ["Blockchain &","Web Developer"];
  const period = 2000;

  useEffect(() => {
    let timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [text, delta]);

  useEffect(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    if (text === fullText && !isDeleting) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150 - Math.random() * 50);
    }
    else if (isDeleting) {
    setDelta(100); // Faster deletion
  }
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    if (isDeleting) {
      setText((prevText) => prevText.substring(0, prevText.length - 1));
    } else {
      setText((prevText) => fullText.substring(0, prevText.length + 1));
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span
                    style={{
                      border: "2px solid white ",
                      padding: "10px",
                      marginBottom: "30px",
                      display: "inline-block",
                      fontSize: "20px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    Welcome to my Portfolio
                  </span>
                  <h2>
                    {`Hi! I'm M Moeez Khan a Passionate `}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    My
                    passion for blockchain development has led me to choose it
                    as my future major domain.I am particularly excited about the
                    opportunities presented by Web3.0 Throughout my academic and
                    professional career.
                  </p>
                  <button onClick={() => (window.location.href = "#connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
