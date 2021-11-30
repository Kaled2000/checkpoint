import Profile from "./profile/profile.js";
import Photo from "./profile/fm.jpg";
import "./App.css";
export default function App() {

const funprop = () => {
    return alert("Khalid");
  };
  return (
    <div className="App">
      <Profile khal="khalid ahmed"  bio="take the risk" Photo={Photo} alert={funprop} />
    </div>
  );
}
