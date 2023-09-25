import logo from "./assets/ironhack-logo-xs.png";
import photo1 from "./assets/icon1.png";
import photo2 from "./assets/icon2.png";
import photo3 from "./assets/icon3.png";
import photo4 from "./assets/icon4.png";
import menu from "./assets/menu-top-xs.png"
function LandingPage() {
  return (
    <>
      <div className="header">
        <div className="nav">
          <img src={logo} className="logo" />
          <img src={menu} className="menu" />
        </div>

        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>
          You will learn how to use this famous frontend library and become a
          ninja developer
        </p>
        <button>Awesome!</button>
      </div>
      <div className="images">
        <div>
          <img src={photo1} className="image" />
          <h3>Declarative</h3>
          <p>React makes it painless to interact</p>
        </div>
        <div>
          <img src={photo2} className="image" />
          <h3>Components</h3>
          <p>Build encapsulated components</p>
        </div>
        <div>
          <img src={photo3} className="image" />
          <h3>Single-way</h3>
          <p>A set of immutable values</p>
        </div>
        <div>
          <img src={photo4} className="image" />
          <h3>JSX</h3>
          <p>Designed to run in modern browsers</p>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
