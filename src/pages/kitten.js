import { useState } from "react";

function Kitten() {
  const [image, setImage] = useState("");

  const [buttonText, setButtonText] = useState("Click Me!");

  function RandomKittenLink() {
    const width = Math.floor(Math.random() * 400) + 100;
    const height = Math.floor(Math.random() * 400) + 100;

    const url =
      "https://placekitten.com/g/" + width.toString() + "/" + height.toString();

    console.log("url: " + url);

    return (
      "https://placekitten.com/g/" + width.toString() + "/" + height.toString()
    );
  }

  function HandleClick() {
    setImage(RandomKittenLink());
    setButtonText("Click Me Again!");
  }

  return (
    <div className="Kitten">
      <h1>
        On your birthday you should see a picture of a kitten whenever you want
        to.
      </h1>
      <h2>Keep clicking the button below to see a picture of a kitten.</h2>
      <div className="flexContainer">
        <button onClick={HandleClick}>{buttonText}</button>
      </div>
      <div className="flexContainer">
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flexContainer">
        <a href="/robbieCompliments">Previous</a>
        <a href="/message">Next</a>
      </div>
    </div>
  );
}

export default Kitten;
