import "../Style/Contact.css";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the solid icons to the library
library.add(fas);
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_40hlxu3",
        "template_j5wb48c",
        e.target,
        "NvMsZc90X3dYyGuYC"
      )
      .then((res) => {
        console.log(res);
        alert("Message Sent!");
      })
      .catch((err) => console.log(err));
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const componentPosition = document.getElementById("contact").offsetTop; // Replace with your component's actual ID

    if (currentScroll >= componentPosition - window.innerHeight / 1.5) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="contact" className={`fade-in ${isVisible ? "appear" : ""}`}>
      {/* ----- title ----- */}
      <h1 className="h1 mt-5 pt-5 pb-5">Contact Me</h1>
      {/* ----- Discription ----- */}
      <div className="row text-light mt-5 contact">
        <div className="col-sm-6">
          <h4>GET IN TOUCH</h4>
          <p>
            Feel free to get in touch with me.I am always open to discussing new
            projects,creative ideas or opportunities to be part of your vision.
            <br />
            <br />
            <FontAwesomeIcon className="icons" icon="envelope" />
            sagharhazinyar@gmail.com
            <br />
            <FontAwesomeIcon className="icons" icon="mobile-screen" /> +93 707
            7676 23
            <br />
            <FontAwesomeIcon className="icons" icon="map-pin" /> Code to
            Inspire(CTI), Herat
          </p>
          {/* ------ Map ------ */}
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.7448786267896!2d62.20183387474006!3d34.35697050158017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6f0921741e9%3A0xcde7ec19d97e6c22!2sCode%20To%20Inspire!5e0!3m2!1sen!2s!4v1700309503559!5m2!1sen!2s"
              title="Map"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="col-sm-6">
          {/* ------ form ------- */}
          <form onSubmit={sendEmail} method="post">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="name" className="label">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Jhon Doe"
                  required
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="col-sm-12">
              <label htmlFor="massage" className="label">
                Massage:
              </label>
              <textarea
                name="massage"
                className="form-control"
                rows={5}
                placeholder="Massage"
                required
              ></textarea>
              <button type="submit" className="form-control btn btn-light mt-2">
                <FontAwesomeIcon className="icons" icon="paper-plane" />
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
