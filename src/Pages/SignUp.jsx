import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
  stepperClasses,
  IconButton,
} from "@mui/material";
import Logo from "../assest/samsara-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import dayjs from "dayjs";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
export const SignUp = () => {
  const navigation = useNavigate();
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const [personName, setPersonName] = React.useState([]);
  const [visibleSection, setVisibleSection] = useState(1);
  const [showPass, setPass] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: "",
  });
  const [TrainerSelected, setTrainerSelected] = useState(false);
  const [PersonalSelected, setPersonalSelected] = useState(true);
  const [CorporateSelected, setCorporateSelected] = useState(false);

  const [inputFields, setInputFields] = useState([
    { id: 1, label: 'College', value: '' },
    { id: 2, label: 'Courses', value: [] },
    { id: 3, label: 'Passing Year', value: '' },
    { id: 4, label: 'Additional therapy or courses', value: '' },
  ]);
  const [setCounter, setSetCounter] = useState(1);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange3 = (event, index) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };

 

  const handleAddFields = () => {
    setInputFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, label: 'College', value: '' },
      { id: prevFields.length + 2, label: 'Courses', value: [] },
      { id: prevFields.length + 3, label: 'Passing Year', value: '' },
      { id: prevFields.length + 4, label: 'Additional therapy or courses', value: '' },
    ]);
    if ((inputFields.length + 1) % 4 === 0) {
      setSetCounter((prevCounter) => prevCounter + 1);
    }
  };

  const handleRemoveFields = () => {
    setInputFields((prevFields) => prevFields.slice(0, prevFields.length - 4));
    if ((inputFields.length - 1) % 4 === 0) {
      setSetCounter((prevCounter) => prevCounter - 1);
    }
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Assuming each section is 80% of the viewport height
    const sectionHeight = window.innerHeight * 0.1;

    console.log(
      "Scroll position",
      Math.floor(scrollPosition / sectionHeight) + 1
    );
    // Determine the section currently in view
    const currentSection = Math.floor(scrollPosition / sectionHeight) + 1;

    setVisibleSection(currentSection);
  };

  const handelContinue = () => {
    navigation("/login");
  };

  const handelBack = () => {
    setPass(false);
  };

  const handelLogin = () => {
    navigation("/login");
  };

  const handelTrainerSelected = () => {
    setTrainerSelected(true);
    setPersonalSelected(false);
    setCorporateSelected(false);
  };
  const handelPersonalSelected = () => {
    setPersonalSelected(true);
    setCorporateSelected(false);
    setTrainerSelected(false);
  };

  const handelCorporateSelected = () => {
    setCorporateSelected(true);
    setTrainerSelected(false);
    setPersonalSelected(false);
  };

  const names = [
    "Stress",
    "Insomnia",
    "Depression",
    "Overweight",
    "Backproblem",
    "Shoulder and Neck problem",
    "Sciatica",
    "Diabetes",
  ];

  const course = ["B.S.C", "M.S.C", "P.H.D"];

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ display: "flex",backgroundColor: "#fff" }}>
      {/* Left side - Login Form */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#FFFBF5",
      margin:`${!isMobile ? "30px" : "0px"}`,
      borderRadius:`${!isMobile ? "50px" : "0px"}`,
      boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <div style={{ height: "100%" }}>
          <div style={{ textAlign: "left" }}>
            <h2>Sign up</h2>
          </div>

          <div style={{ display: "flex" }}>
            <Button
              variant="outlined"
              size="small"
              color={PersonalSelected ? "success" : "error"}
              onClick={handelPersonalSelected}
            >
              Personal
            </Button>

            <Button
              variant="outlined"
              size="small"
              color={CorporateSelected ? "success" : "error"}
              style={{ marginLeft: "30px" }}
              onClick={handelCorporateSelected}
            >
              Corporate
            </Button>
            <Button
              variant="outlined"
              size="small"
              color={TrainerSelected ? "success" : "error"}
              style={{ marginLeft: "30px" }}
              onClick={handelTrainerSelected}
            >
              Trainer
            </Button>
          </div>

          {!TrainerSelected && (
            <div style={{ marginTop: 30 }}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="phoneNumber"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email id"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="phoneNumber"
                  />
                </Grid>
                {CorporateSelected && (
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="phoneNumber"
                    />
                  </Grid>
                )}
                {CorporateSelected && (
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      label="Employee id"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="phoneNumber"
                    />
                  </Grid>
                )}

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* <DemoContainer components={['DateField']}>
                      <DemoItem label="Date"> */}
                      <DateField placeholder="DOB" style={{ width: "100%" }} />
                      {/* </DemoItem>
      </DemoContainer> */}
                    </LocalizationProvider>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label=" Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Height"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Weight"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Health Issues
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        sx={{ overflowX: "hidden", width: "100%" }}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>

                <Grid item xs={12} >
                  <div>
                    <TextareaAutosize
                      style={{
                        width:`${!isMobile ? "98%" : "93%"}`,
                        backgroundColor: "#FFFBF5",
                        padding: 10,
                      }}
                      aria-label="minimum height"
                      minRows={4}
                      maxRows={5}
                      placeholder="Describe here"
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={handelContinue}
                    >
                      Continue
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}

          {TrainerSelected && (
            <div 
            style={{
              marginTop: 30,
              overflowY: "auto",
              height: "650px",
              
               // Hide the scrollbar
            }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email id"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      
                      <DateField placeholder="DOB" style={{ width: "100%" }} />
                     
                    </LocalizationProvider>
                  </div>
                </Grid>

              
   
       
      {inputFields.map((field,index) => (
      
          <Grid item xs={6}>
         {
          index % 4 === 0 ?
          <div style={{ backgroundColor: '#FFFBF5', padding: '5px', marginBottom: '5px',width:"100%" }}>
           {index % 4 === 0 && setCounter + Math.floor(index / 4)}. {/* Displaying numbering for each set of four input fields */}
        </div>
        :
        <div style={{ backgroundColor: '#FFFBF5', padding: '5px', marginBottom: '5px' }}>
         {/* Displaying numbering for each set of four input fields */}
     </div>
         }
            

            {field.label === 'Courses' ? (
              <FormControl sx={{ width: '100%',marginTop:"20px" }}>
                <InputLabel id={`demo-multiple-checkbox-label-${field.id}`}>
                  {field.label}
                </InputLabel>
                <Select
                  value={field.value}
                  onChange={(e) => handleChange2(e, field.id)}
                  input={<OutlinedInput label={field.label} />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {/* Replace 'course' with your actual array of course options */}
                  {course.map((name) => (
                    <MenuItem key={name} value={name}>
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                id={`outlined-basic-${field.id}`}
                label={field.label}
                variant="outlined"
                style={{ width: '100%' }}
                value={field.value}
                onChange={(e) => handleChange2(e, field.id)}
              />
            )}
          </Grid>
       
      ))}
      
      <Grid item xs={12}>
  <div style={{textAlign:"right"}}>
  <IconButton  onClick={handleAddFields} color="primary">
            <AddIcon />
          </IconButton>
          {inputFields.length > 4 &&
          <IconButton onClick={handleRemoveFields} color="error">
            <RemoveIcon />
          </IconButton>
}
  </div>
          
        </Grid>
    
   


                {/* <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Spacebarwithyear"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Grid> */}
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>


                <Grid item xs={12} >
                  
                    <TextareaAutosize
                      style={{
                       
                        backgroundColor: "#FFFBF5",
                        padding: 10,
                        width:`${!isMobile ? "98%" : "93%"}`
                      }}
                      aria-label="minimum height"
                      minRows={4}
                      maxRows={5}
                      placeholder="WorkExperience– 500 words"
                    />
                  
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={handelContinue}
                    >
                      Continue
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}

          <div
            style={{
              textAlign: "center",
              marginTop:"70px"
            }}
          >
            <p style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
              Already have an account?{" "}
              <span
                style={{ color: "#EE731B", fontSize: 16, cursor: "pointer" }}
                onClick={handelLogin}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Scrollable Content */}
      {!isMobile && (
        <div
          style={{
            flex: 0.5,
            
           
          }}
        >
        <div>
        <div style={{ textAlign: "center",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh" }}>
              <img src={Logo} alt="img" />
            </div>

        </div>
          {/* Add more content as needed */}
        </div>
      )}
    </div>
  );
};
