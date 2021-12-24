import React from "react";
import {
  NativeSelect,
  InputLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Slider,
  Typography,
  TextField,
} from "@mui/material";
import "../App.css";

function valuetext(value) {
  return `${value}$`;
}

class Form extends React.Component {
  state = {
    FoodStamp: 0,
    eightHousing: 0,
    read: 0,
    parents: 0,
    resumeGap: 0,
    internet: 0,
    disabled: 0,
    partJob: 0,
    hospialized: 0,
    computer: 0,
  };

  handleRadio = (event) => {
    console.log(event.name, event.value);
    this.setState({});
  };

  render() {
    const {
      FoodStamp,
      eightHousing,
      read,
      parents,
      resumeGap,
      internet,
      disabled,
      partJob,
      hospialized,
      computer,
    } = this.state;
    const marks = [
      {
        value: 0,
        label: "0$-10,000$",
      },
      {
        value: 10,
        label: "10,000$-25,000$",
      },
      {
        value: 20,
        label: "25,000$-50,000$",
      },
      {
        value: 30,
        label: "50,000$-75000$",
      },
      {
        value: 40,
        label: "75,000$-100,000$",
      },
      {
        value: 50,
        label: "100,000$-125,000$",
      },
      {
        value: 60,
        label: "125,000$-150,000$",
      },
      {
        value: 70,
        label: "150,000$-175,000$",
      },
      {
        value: 80,
        label: "175,000$-200,000$",
      },
      {
        value: 100,
        label: "+200,000$",
      },
    ];
    return (
      <div className="container">
        <Box sx={{ width: 300 }} className="box">
          <Typography variant="p" mt={2}>
            Household Income
          </Typography>
          <Slider
            aria-label="Household Income"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        <FormControl fullWidth className="select" margin="dense">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "age",
            }}
          >
            <option value={0}>18-29</option>
            <option value={1}>30-44</option>
            <option value={2}>45-60</option>
            <option value={3}>more than 60</option>
          </NativeSelect>
        </FormControl>

        <FormControl fullWidth className="select" margin="dense">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Gender
          </InputLabel>
          <NativeSelect
            defaultValue={"Female"}
            inputProps={{
              name: "gender",
              id: "gender",
            }}
          >
            <option value={"Female"}>Female</option>
            <option value={"Male"}>Male</option>
          </NativeSelect>
        </FormControl>

        <FormControl fullWidth className="select" margin="dense">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Education
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: "education",
              id: "education",
            }}
          >
            <option value={0}>High School</option>
            <option value={1}>Some Undergraduate</option>
            <option value={2}>Some Masters</option>
            <option value={3}>Completed Undergraduate</option>
            <option value={4}>Completed Masters</option>
          </NativeSelect>
        </FormControl>

        <FormControl fullWidth className="select" margin="dense">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Region
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: "education",
              id: "education",
            }}
          >
            <option value={0}>East North Central</option>
            <option value={1}>East South Central</option>
            <option value={2}>Middle Atlantic</option>
            <option value={3}>Mountain</option>
            <option value={4}>New England</option>
            <option value={5}>Pacific</option>
            <option value={6}>South Atlantic</option>
            <option value={7}>West North Central</option>
            <option value={8}>West South Central</option>
          </NativeSelect>
        </FormControl>

        <div className="text">
          <p>How many days were you hospitalized for your mental illness?!</p>
          <TextField
            id="standard-basic"
            label="Enter Number"
            variant="standard"
          />
        </div>
        <div className="text">
          <p>Total length of any gaps in my resume in months?!</p>
          <TextField
            id="standard-basic"
            label="Enter Number"
            variant="standard"
          />
        </div>
        <div className="text">
          <p>Annual Income without social welfare?!</p>
          <TextField
            id="standard-basic"
            label="Enter Number"
            variant="standard"
          />
        </div>
        <div className="text">
          <p>Annual Income with social welfare?!</p>
          <TextField
            id="standard-basic"
            label="Enter Number"
            variant="standard"
          />
        </div>

        <div className="select2">
          <FormControl component="fieldset">
            <FormLabel component="legend">I've my own computer? </FormLabel>
            <RadioGroup
              row
              aria-label="computer"
              name="computer"
              onChange={this.handleRadio}
              
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">
              I've been hospitalized before my mental illness?
            </FormLabel>
            <RadioGroup
              row
              aria-label="hospitalized"
              name="hospitalized"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">
              I am currently emploed at least part time?
            </FormLabel>
            <RadioGroup
              row
              aria-label="part time job"
              name="partJob"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">I am legally disabled?</FormLabel>
            <RadioGroup
              row
              aria-label="disabled"
              name="disabled"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">
              I've my regular access to the internet
            </FormLabel>
            <RadioGroup
              row
              aria-label="internet"
              name="internet"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">I have gap in my resume?</FormLabel>
            <RadioGroup
              row
              aria-label="I have gap in my resume?"
              name="resumeGap"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">I live with my Parents?</FormLabel>
            <RadioGroup
              row
              aria-label="I live with my Parents"
              name="parents"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">
              I read outside the work or School?
            </FormLabel>
            <RadioGroup
              row
              aria-label="I read outside the work or School"
              name="read"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Food Stamp</FormLabel>
            <RadioGroup
              row
              aria-label="I recieve Food Stamp?"
              name="FoodStamp"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">
              I am on Section 8 Housing ?
            </FormLabel>
            <RadioGroup
              row
              aria-label="I am on Section 8 Housing ?"
              name="eightHousing"
              onChange={this.handleRadio}
            >
              <FormControlLabel value={1} control={<Radio />} label="Yes" />
              <FormControlLabel value={0} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}
export default Form;
