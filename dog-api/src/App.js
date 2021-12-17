import "./App.css";
import Title from "./Title";
import React from "react";
import Main from "./Main";
import Nav from "./Nav";
import Marquee from "react-fast-marquee";
import { useState } from "react";

export default function App() {
  const [dogLink, setDogLink] = useState(
    "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_12316.jpg"
  );
  const [data, setData] = useState(null);

  return (
    <div className="App" id="pic">
      <Marquee>
        <Title title="FIND YOUR DOG!" />
      </Marquee>
      <p> Enter the name of a dog breed</p>
      <p> Once you enter a breed, keep on clicking to see my cuteness!</p>
      <Nav setDog={setDogLink} setData={setData} />
      <Main dogBreed={dogLink} data={data} />
      <footer> Evan Sciancalepore, Marvin Pramana, Sung Jae Ko</footer>
    </div>
  );
}
