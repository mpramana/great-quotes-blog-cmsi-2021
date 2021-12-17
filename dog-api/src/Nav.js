import { useState } from "react";
export default function Nav({ setDog, setData }) {
  const [breedName, setBreedName] = useState("Corgi");
  function handleClick(event) {
    const breed = document.getElementById("breed").value;
    setBreedName(breed);
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setDog(null));

    console.log(breedName);
  }
  return (
    <div>
      <input id="breed" />
      <button onClick={handleClick}>Get Dog</button>
    </div>
  );
}
