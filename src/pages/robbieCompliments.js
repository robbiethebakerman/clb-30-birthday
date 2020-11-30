import { useState } from "react";

function RobbieCompliments() {
  const compliments = [
    "I like your hair",
    "You're really nice",
    "You have lovely brown eyes",
    "You're very skilled and talented",
  ];

  const images = [
    "Robbie1.jpg",
    "Robbie2.jpg",
    "Robbie3.jpg",
    "Robbie4.jpg",
    "Robbie5.jpg",
    "Robbie6.jpg",
    "Robbie7.jpg",
    "Robbie8.jpg",
  ];

  const [compliment, setCompliment] = useState("");

  const [image, setImage] = useState("");

  const [buttonText, setButtonText] = useState("Click Me!");

  function RandomItem(array) {
    const index = Math.floor(Math.random() * array.length);

    console.log("random item: " + array[index]);

    return array[index];
  }

  function HandleClick() {
    setCompliment(RandomItem(compliments));
    setImage(RandomItem(images));
    setButtonText("Click Me Again!");
  }

  return (
    <div className="RobbieCompliments">
      <h1>
        On your birthday you should have Robbie saying lots of nice things to
        you.
      </h1>
      <h2>Keep clicking the button below to make Robbie say nice things.</h2>
      <div className="flexContainer">
        <button onClick={HandleClick}>{buttonText}</button>
      </div>
      <div className="flexContainer">
        <div>
          <img src={image} alt="" />
        </div>
        <p className="compliment">{compliment}</p>
      </div>
      <div className="flexContainer">
        <a href="/">Previous</a>
        <a href="/kitten">Next</a>
      </div>
    </div>
  );
}

export default RobbieCompliments;
