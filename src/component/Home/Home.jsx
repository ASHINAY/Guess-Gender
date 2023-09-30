import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);

    setGender("");
  };
  const onBtnClick = () => {
    const url = `https://api.genderize.io/?name=${name}`;
    axios
      .get(url)
      .then((response) => {
        setGender(response.data.gender);

        console.log("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <span className="subTitle-Text">GuessGen</span>
        <span className="subTitle-Text1">Predicting Gender from Names</span>
        <div className="inputContainer">
          <input
            placeholder="Enter Name..."
            type="text"
            onChange={handleChange}
            value={name}
            className="inputField"
          ></input>
          <button className="submitButton" onClick={onBtnClick}>
            Submit
          </button>
          {
          gender === null ? 
            <span className="genderText">Unable to detect Gender</span>
            
           : gender !== ""? 
            <span className="genderText">
              Gender was <span className="highlightText">{gender.toUpperCase()}</span>
            </span>
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
