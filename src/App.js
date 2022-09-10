import "./App.css";
import img from "./images/image-qr-code.png";

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="card-img">
          <img src={img} alt="QR code" />
        </div>
        <div className="card-text">
          <h3>Improve your front-end skills by building projects</h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
