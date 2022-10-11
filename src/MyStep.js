import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const MyStep = () => {
  const [activeState, setActiveState] = useState(0);
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  function getSteps() {
    return [
      "Basic Information",
      "Contact Information",
      "Personal Information",
      "Payment",
    ];
  }
  const BasicInformation = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };
  const ContactInformation = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="alternatePhone"
          render={({ field }) => (
            <TextField
              id="alternate-phone"
              label="Alternate Phone"
              variant="outlined"
              placeholder="Enter Your Alternate Phone"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };
  const PersonalInformation = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="address1"
          render={({ field }) => (
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="address2"
          render={({ field }) => (
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };
  const Payment = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="cardNumber"
          render={({ field }) => (
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardMonth"
          render={({ field }) => (
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardYear"
          render={({ field }) => (
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };
  function getStepItem(step) {
    switch (step) {
      case 0:
        return <BasicInformation />;
      case 1:
        return <ContactInformation />;
      case 2:
        return <PersonalInformation />;
      case 3:
        <Payment />;
      default:
        return "";
    }
  }

  const steps = getSteps();
  const handleBack = () => {
    setActiveState(activeState - 1);
  };
  const handleNext = (data) => {
    console.log(data);
    setActiveState(activeState + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

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
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepItem(activeState)}
              <Button
                variant="contained"
                disabled={activeState === 0}
                onClick={handleBack}
              >
                BACK
              </Button>
              <Button variant="contained"  type="submit">
                {activeState === steps.length - 1 ? "FINISH" : "NEXT"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default MyStep;
