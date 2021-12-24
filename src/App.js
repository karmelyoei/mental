import React, { useEffect, useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import Chart from "./components/Chart";
import Form from "./components/form";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setArticles(response))
      .catch((error) => console.log(error));
  }, []);
  console.log("articles", articles);
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
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
