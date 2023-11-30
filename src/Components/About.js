import "../Style/About.css";
import p4 from "../images/p4.png";

export default function About() {
  return (
    <div id="about" className="pt-2">
      <div className="row text-light pb-5 pt-5 mt-5">
        <div className="col-sm-6 about">
          <h1 className="headings">Hello,</h1>
          <h3 className="headings">Thank you for visiting my page!</h3>
          <p>
            I'm Saghar Hazinyar Web developer from Herat,Afghanistan. I design
            and code beautifully simple things, and I love what I do.
          </p>
        </div>

        <div className="col-sm-6 about">
          <img src={p4} alt="profile-pic" className="profile"></img>
        </div>
      </div>
    </div>
  );
}
