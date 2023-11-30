import { useEffect, useState } from "react";
import "../Style/Skills.css";

// import React, { useState } from "react";
import { Knob } from "primereact/knob";

export default function Skills() {
  const [animatedValues, setAnimatedValues] = useState({
    html: 0,
    css: 0,
    bootstrap: 0,
    mysql: 0,
    php: 0,
    javascript: 0,
    react: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prevValues) => ({
        html: prevValues.html < 90 ? prevValues.html + 1 : 90,
        css: prevValues.css < 85 ? prevValues.css + 1 : 85,
        bootstrap: prevValues.bootstrap < 85 ? prevValues.bootstrap + 1 : 85,
        mysql: prevValues.mysql < 80 ? prevValues.mysql + 1 : 80,
        php: prevValues.php < 80 ? prevValues.php + 1 : 80,
        javascript: prevValues.javascript < 75 ? prevValues.javascript + 1 : 75,
        react: prevValues.react < 70 ? prevValues.react + 1 : 70,
      }));
    }, 50); // Adjust the interval for the animation speed

    return () => clearInterval(interval);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const componentPosition = document.getElementById("skills").offsetTop;

    if (currentScroll >= componentPosition - window.innerHeight / 1.5) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills" className={`fade-in ${isVisible ? "appear" : ""}`}>
      <div className="skills" id="skills">
        <div className="row">
          <div className="col-sm-12 ">
            <h1 className="pt-5">Skills</h1>
            <div className="card pt-5 pb-5 flex justify-content-center">
              <div className="row">
                <div className="col-sm-3 bars">
                  <h4>HTML</h4>
                  <Knob
                    value={animatedValues.html}
                    valueTemplate={`${animatedValues.html}%`}
                    id="knob"
                    valueColor="#f26a8d"
                    textColor="#f26a8d"
                  ></Knob>
                </div>
                <div className="col-sm-3 bars">
                  <h4>CSS</h4>
                  <Knob
                    value={animatedValues.css}
                    valueTemplate={`${animatedValues.css}%`}
                    id="knob"
                    valueColor="#ff8fab"
                    textColor="#ff8fab"
                  ></Knob>
                </div>
                <div className="col-sm-3 bars">
                  <h4>Bootstrap</h4>
                  <Knob
                    value={animatedValues.bootstrap}
                    valueTemplate={`${animatedValues.bootstrap}%`}
                    id="knob"
                    valueColor="#ff7096"
                    textColor="#ff7096"
                  ></Knob>
                </div>
                <div className="col-sm-3 bars">
                  <h4>MySQL</h4>
                  <Knob
                    value={animatedValues.mysql}
                    valueTemplate={`${animatedValues.mysql}%`}
                    id="knob"
                    valueColor="#ff85a1"
                    textColor="#ff85a1"
                  ></Knob>
                </div>
                <div className="col-sm-4 bars">
                  <h4>PHP</h4>
                  <Knob
                    value={animatedValues.php}
                    valueTemplate={`${animatedValues.php}%`}
                    id="knob"
                    valueColor="#ff99ac"
                    textColor="#ff99ac"
                  ></Knob>
                </div>
                <div className="col-sm-4 bars">
                  <h4>JavaScript</h4>
                  <Knob
                    value={animatedValues.javascript}
                    valueTemplate={`${animatedValues.javascript}%`}
                    id="knob"
                    valueColor="#fbb1bd"
                    textColor="#fbb1bd"
                  ></Knob>
                </div>
                <div className="col-sm-4 bars">
                  <h4>React</h4>
                  <Knob
                    value={animatedValues.react}
                    valueTemplate={`${animatedValues.react}%`}
                    id="knob"
                    valueColor="#f9bec7"
                    textColor="#f9bec7"
                  ></Knob>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
