import caroLImage from "../../assets/CaroL.jpg";
import arrowImage from "../../assets/Arrow.svg";
import "./Header.css";
import "animate.css";

export const Header = () => {
  const scrollTo = () =>
    document.getElementById("scrollTo").scrollIntoView({ behavior: "smooth" });

  return (
    <div className="header grid-parent">
      <div className="wrapper">
        <img
          className="my-image"
          src={caroLImage}
          alt="A picture of CaroLuna"
        />

        <div className="name-and-title">
          <h1>Hi! I&apos;m Carolina Luna</h1>
          <h2>Frontend Developer</h2>
        </div>
        <p>
          Carolina is a web developer with a solid foundation from an intensive web development bootcamp. Comfortable working with both frontend and backend development, including JavaScript, TypeScript, React, AI integration, and database management. Has experience in pair programming and problem-solving, combining technical knowledge with creativity. Fluent in English, Swedish, and Spanish, and enjoys coding and learning more about the tech industry.
        </p>
      </div>
      <button className="next-section-arrow" onClick={scrollTo}>
        <img
          className="arrow-down"
          src={arrowImage}
          alt="arrow-pointing-down"
        />
      </button>
    </div>
  );
};
