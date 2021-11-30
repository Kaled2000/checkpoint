import "../App.css";
export default function Profile(prop) {
    return (
      <div className="App">
        <h1>{prop.khal}</h1>
        <h2>{prop.bio}</h2>
        <img src={prop.Photo} alt="altprop" />
        <p>coding</p>
        <button onClick={prop.alert}>press</button>
      </div>
    );
  }
  
