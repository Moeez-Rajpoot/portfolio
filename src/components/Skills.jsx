
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="skill-bx wow zoomIn"
              style={{
                border: "2px solid grey",
              }}
            >
              <h2>Skills</h2>
              <p>
                I possess a diverse range of skills acquired through various
                experiences and learning opportunities. From technical
                proficiencies to interpersonal abilities, my skill set includes:{" "}
                <br></br> Frontend ,Backend & Blockchain development Skills
              </p>
              <Carousel
                responsive={responsive}
                infinite={false}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px' }}>
                  <CircularProgressbar
                    styles={{
                    
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight:'600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='85'
                    text='React.js'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>
               
                <div className="item" style={{ width: 160, height: 160,  marginLeft:'80px' }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight:'600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='80'
                    text='Node.js'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>

                <div className="item" style={{ width: 160, height: 'auto', marginLeft:'80px'  }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "18px",
                        fontWeight:'600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='85'
                    text='Solidity'
                  />
                  <h5 style={{ marginTop: "10px" }} >Intermediate</h5>
                </div>

                
                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight:'600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='85'
                    text='Ether.js'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight:'600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='90'
                    text='HTML'
                  />
                  <h5 style={{ marginTop: "10px" }}>High</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='90'
                    text='CSS'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'  }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "14px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='80'
                    text='JavaScript'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>


                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "15px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='80'
                    text='Azure SQL'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "15px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='50'
                    text='Bootstrap'
                  />
                  <h5 style={{ marginTop: "10px" }}>Beginner</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='80'
                    text='C++'
                  />
                  <h5 style={{ marginTop: "10px" }}>Intermediate</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='50'
                    text='Java'
                  />
                  <h5 style={{ marginTop: "10px" }}>Beginner</h5>
                </div>

                <div className="item" style={{ width: 160, height: 160 , marginLeft:'80px'   }}>
                  <CircularProgressbar
                    styles={{
                      path: {
                        stroke: "#813399", // Change this to your desired color
                      },
                      text: {
                        fill: "white", // Change this to your desired color
                        fontSize: "16px",
                        fontWeight: '600'
                      },
                    }}
                    strokeWidth="12"
                    col
                    value='50'
                    text='C#'
                  />
                  <h5 style={{ marginTop: "10px" }}>Beginner</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
