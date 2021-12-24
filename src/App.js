import React, { useEffect, useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import Chart from "./components/Chart";
import Form from "./components/form";

function App() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/test", {
      methods: "GET",
    })
      .then((response) => response.json())
      .then((response) => setValue(response))
      .catch((error) => console.log(error));
  }, [value]);
  console.log("articles", value);
  return (
    <div className="App">
      <div className="sectionOne">
        <div className="headerContainer">
          <Typography className="header" color="primary" variant="h4" mt={2}>
            Mental Illness & Unemployment
          </Typography>
          <img src={require("./assets/brain.png")} alt="brain" />
        </div>

        <Typography className="subheader" color="seconday" variant="p" mt={2}>
          Please fill the options below inorder to get the proper predication
          for your expected mental health
        </Typography>
      </div>
      <div className="sectionTwo">
        <Form />

        <div className="plot">
          <Typography className="header" color="primary" className="result">
            {value.text == 0
              ? "You have a mental illness please go to therapist!"
              : "Yay you dont have any mental illness, continue enjoying your life!"}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
