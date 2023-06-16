import "./App.css";
import Cat from "./assets/cat.png";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p>WESHLEEEEE!</p>
      <div className="w-12">
        <img src={Cat} alt="Black Cat" />
      </div>
    </div>
  );
}

export default App;
