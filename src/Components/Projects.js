import "../Style/Projects.css";
import { useState, useEffect } from "react";
import travel from "../images/travel.png";
import women from "../images/women.jpg";
import BitDog from "../images/BitDog.jpg";
import guess from "../images/guess.jpg";
import modal from "../images/modal.JPG";
import CV from "../images/CV.JPG";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const componentPosition = document.getElementById("projects").offsetTop;

    if (currentScroll >= componentPosition - window.innerHeight / 1.5) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="projects" className={`fade-in ${isVisible ? "appear" : ""}`}>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="h1 pt-5 pb-5">Projects</h1>
        </div>
        <div className="card col-sm-4">
          <img
            src={travel}
            className="card-image rounded"
            alt="Project"
            max-width={200}
            max-height={300}
          />
          <div className="card-body">
            <h5 className="card-header">Dream Travel Destination</h5>
            <p>
              This website allows user to get information about the tourism and
              entertainment places support two languages.
              <br />
              <a
                className="card-footer"
                href="https://travel-destinations-ten.vercel.app/"
              >
                <FaGithub className="foot-icon" />
              </a>
            </p>
          </div>
        </div>

        <div className="card col-sm-4">
          <img
            src={women}
            className="card-image rounded"
            alt="Project"
            max-width={200}
            max-height={300}
          />
          <h5 className="card-header">Women Fashion</h5>
          <div className="card-body">
            <p>
              Women Fashion is a static template in various pages and contain
              from different content, that is shown as a complete website,
              designed with HTML, Css and its framework(Bootstrap).
              <br />
              <a
                className="card-footer"
                href="https://sagharhazinyar.github.io/Women-Fashion/"
              >
                <FaGithub className="foot-icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="card col-sm-4">
          <img
            src={BitDog}
            className="card-image rounded"
            alt="Project"
            max-width={200}
            max-height={300}
          />
          <h5 className="card-header">Bit Dog</h5>
          <div className="card-body">
            <p>
              Meet new and interesting dogs nearby.BitDog is a static template
              that is made with HTML,Css,and Bootstrap.Shows different content
              in one page.
              <br />
              <a
                className="card-footer"
                href="https://sagharhazinyar.github.io/BitDog/"
              >
                <FaGithub className="foot-icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="card col-sm-4">
          <img
            src={guess}
            className="card-image rounded"
            alt="Project"
            max-width={200}
            max-height={300}
          />
          <h5 className="card-header">Guess The Number</h5>
          <div className="card-body">
            <p>
              Guess the number get score.Whit this game you can gusse a number
              between 1-20 and when you find the correct one you get score.This
              simple game made with javaScript.
              <br />
              <a
                className="card-footer"
                href="https://sagharhazinyar.github.io/Guess-Number/"
              >
                <FaGithub className="foot-icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="card col-sm-4">
          <img
            src={modal}
            className="card-image rounded"
            alt="Project"
            max-width={200}
            max-height={300}
          />
          <h5 className="card-header">Modal</h5>
          <div className="card-body">
            <p>
              Modals (also known as modal windows, overlays, and dialogs) are
              large UI elements that sit on top of an application's main
              window.This basic modal made with javaScript.
              <br />
              <a
                className="card-footer"
                href="https://sagharhazinyar.github.io/Modal/"
              >
                <FaGithub className="foot-icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="card col-sm-4">
          <img
            src={CV}
            className="card-image rounded"
            alt="Project"
            max-width={200}
            max-height={300}
          />
          <h5 className="card-header">Simple Protfolio</h5>
          <div className="card-body">
            <p>
              A simple portfolio that shows brief introduction about me and some
              social media links.Made with Html and Css.
              <br />
              <a
                className="card-footer"
                href="https://sagharhazinyar.github.io/simple-portfolio/"
              >
                <FaGithub className="foot-icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
