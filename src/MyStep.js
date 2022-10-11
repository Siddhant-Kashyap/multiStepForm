import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";


const MyStep = () => {
  const [activeState, setActiveState] = useState(0);
  function getSteps() {
    return [
      "Basic Information",
      "Contact Information",
      "Personal Information",
      "Payment",
    ];
  }
  function getStepItem(step) {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              name="firstName"
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              name="lastName"
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              name="emailAddress"
            />
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              name="phoneNumber"
            />
            <TextField
              id="alternate-phone"
              label="Alternate Phone"
              variant="outlined"
              placeholder="Enter Your Alternate Phone"
              fullWidth
              margin="normal"
              name="alternatePhone"
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              name="address1"
            />
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              name="address2"
            />
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              name="country"
            />
          </>
        );
      case 3:
        return (
          <>
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              name="cardNumber"
            />
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              name="cardMonth"
            />
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              name="cardYear"
            />
          </>
        );
        default:return "Error"
    }
  }

  const steps = getSteps();
  const handleBack = () => {
    setActiveState(activeState - 1);
  };
  const handleNext = () => {
    setActiveState(activeState + 1);
  };

  return (
    <div>
      <Stepper activeStep={activeState}>
        {steps.map((step, index) => {
          return (
            <Step>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeState === steps.length ? (
        <Typography variant="h3" align="center">
          "THANK YOU"
        </Typography>
      ) : (
        <>
          <form>{getStepItem(activeState)}</form>
          <Button
            variant="contained"
            disabled={activeState === 0}
            onClick={handleBack}
          >
            BACK
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeState === steps.length-1 ? "FINISH" : "NEXT"}
          </Button>
        </>
      )}
    </div>
  );
};

export default MyStep;
