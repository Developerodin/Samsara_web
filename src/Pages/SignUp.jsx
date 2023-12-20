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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { createTheme } from "@mui/material/styles";
import "./SignUp.css";
import dayjs from "dayjs";
import axios from "axios";
import { Base_url } from "../Config/BaseUrl";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const orangeTheme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Set the main color to your desired shade of orange
    },
  },
});
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const SignUp = () => {
  const navigation = useNavigate();
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const [personName, setPersonName] = React.useState([]);
  const [visibleSection, setVisibleSection] = useState(1);
  const [showPass, setPass] = useState(false);

  const [TrainerSelected, setTrainerSelected] = useState(false);
  const [PersonalSelected, setPersonalSelected] = useState(true);
  const [CorporateSelected, setCorporateSelected] = useState(false);

  const [inputFields, setInputFields] = useState([
    { id: 1, label: "College", value: "" },
    { id: 2, label: "Courses", value: "" },
    { id: 3, label: "Duration", value: "" },
    { id: 4, label: "Passing Year", value: "" },
    { id: 5, label: "Additional therapy or courses", value: "" },
  ]);
  const [setCounter, setSetCounter] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    email: "",
    companyName: "",
    corporateId: "",
    mobile: "",
    dob: null,
    city: "",
    pincode: "",
    country: "",
    height: "",
    weight: "",
    healthIssues: [],
    description: "",
    Address: "",
    howyouknowus: "",
    PriorExperience: "",
  });

  const [formDataTrainer, setFormDatasetFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: null,
    city: "",
    pincode: "",
    country: "",
    description: "",
    Expertise: [],
    Address: "",
   
  });
const [selectedType,setSelectedType] = useState("Personal")
  const [userimageFile1,setUserImageFile1] = useState(null)
  const [userimageFile2,setUserImageFile2] = useState(null)
  const [TeacherimageFile1,setTeacherImageFile1] = useState(null)
  const [TeacherimageFile2,setTeacherImageFile2] = useState(null)
  const [imageuserSrc1, setImageuserSrc1] = useState(null);
  const [imageuserSrc2, setImageuserSrc2] = useState(null);
  const [imageSrc1, setImageSrc1] = useState(null);
  const [imageSrc2, setImageSrc2] = useState(null);

  const [value, setValue] = React.useState(0);

  const handleChangetabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setFormData((prevData) => ({
      ...prevData,
      healthIssues: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleChangeTrainer3 = (event) => {
    const {
      target: { value },
    } = event;
    setFormDatasetFormData((prevData) => ({
      ...prevData,
      Expertise: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  const handleChangeTrainer = (e) => {
    const { name, value } = e.target;
    setFormDatasetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2Trainer = (event, id) => {
    const {
      target: { value },
    } = event;
    const updatedFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: value } : field
    );
    setInputFields(updatedFields);
  };

  const handleDateChangeTrainer = (date) => {
    setFormDatasetFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };
  const handleChange3 = (e, id) => {
    const updatedFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: e.target.value } : field
    );
    setInputFields(updatedFields);
  };

  const handleAddFields = () => {
    setInputFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, label: "College", value: "" },
      { id: prevFields.length + 2, label: "Courses", value: [] },
      { id: prevFields.length + 3, label: "Duration", value: "" },
      { id: prevFields.length + 4, label: "Passing Year", value: "" },
      {
        id: prevFields.length + 5,
        label: "Additional therapy or courses",
        value: "",
      },
    ]);
    if ((inputFields.length + 1) % 5 === 0) {
      setSetCounter((prevCounter) => prevCounter + 1);
    }
  };

  const handleRemoveFields = () => {
    setInputFields((prevFields) => prevFields.slice(0, prevFields.length - 5));
    if ((inputFields.length - 1) % 5 === 0) {
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
    if (selectedType === "Corporate" && (formData.companyName === "" || formData.corporateId === "")) {
      alert("Company Name and Corporate ID are required for Corporate type.");
      return;
    }
   
   for (const key in formData) {
      // Skip checking companyName and corporateId if selectedType is Corporate
      console.log("Selected type : ",selectedType)

      if (formData[key] === "") {
        if (selectedType !== "Corporate" && (key === "companyName" || key === "corporateId")) {
          console.log("Corporate ==>",key)
          continue;
        }
        else{
          alert(`${key} is required.`);
        }
        
        return; // Stop the submission process if any field is empty
      }
    }

    const formData1 = new FormData();
    console.log("Data of images", userimageFile1,userimageFile2);
    const userData ={
      "name": formData.name,
      "gender": formData.sex,
      "company_name":formData.companyName,
      "corporate_id":formData.corporateId,
      "email":formData.email,
      "password": "",
      "mobile":formData.mobile,
      "dob": formData.dob,
      "images": [userimageFile1, userimageFile2],
      "Address":formData.Address,
      "city":formData.city,
      "pincode":formData.pincode,
      "country":formData.country,
      "height":formData.height,
      "weight":formData.weight,
      "health_issues":formData.healthIssues,
      "howyouknowus":formData.howyouknowus,
      "PriorExperience": formData.PriorExperience,
      "description":formData.description,
      "dataImages":userimageFile1
    };
    
    formData1.append("name", userData.name);
    formData1.append("gender", userData.gender);
    formData1.append("company_name", userData.company_name);
    formData1.append("corporate_id", userData.corporate_id);
    formData1.append("email", userData.email);
    formData1.append("password", userData.password);
    formData1.append("mobile", userData.mobile);
    formData1.append("dob", userData.dob);
    userData.images.forEach((image, index) => {
      formData1.append('images', image);
    });
    formData1.append("Address", userData.Address);
    formData1.append("city", userData.city);
    formData1.append("pincode", userData.pincode);
    formData1.append("country", userData.country);
    formData1.append("height", userData.height);
    formData1.append("weight", userData.weight);
    formData1.append("health_issues", userData.health_issues);
    formData1.append("howyouknowus", userData.howyouknowus);
    formData1.append("PriorExperience", userData.PriorExperience);
    formData1.append("description", userData.description);
    
    axios.post(`${Base_url}student_signup`, formData1)
      .then((response) => {
        console.log('User created successfully:', response.data);
        // Optionally, you can navigate to the login page or perform any other action
        // navigation("/login");
        navigation("/login");
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        
        alert("Refresh and try again");
      });
  };
  const handelTrainerContinue = () => {
    for (const key in formDataTrainer) {
      if (formDataTrainer[key] === "") {
        alert(`${key} is required.`);
        return; // Stop the submission process if any field is empty
      }
    }
    // navigation("/login");
    // console.log("Data Trainer ===>", formDataTrainer);
    console.log("Data of map inputs", inputFields);
    // console.log("Data of images", imageSrc1,imageSrc2);
    const formData = new FormData();

// Append regular fields
formData.append('name', formDataTrainer.name);
formData.append('email', formDataTrainer.email);
formData.append('password', formDataTrainer.password);
formData.append('mobile', formDataTrainer.mobile);
formData.append('dob', formDataTrainer.dob);
formData.append('Address', formDataTrainer.Address);
formData.append('expertise', formDataTrainer.Expertise);
formData.append('city', formDataTrainer.city);
formData.append('pincode', formDataTrainer.pincode);
formData.append('country', formDataTrainer.country);
const qualificationData = JSON.stringify(inputFields);
formData.append('qualification', qualificationData);
const ImageData=[TeacherimageFile1,TeacherimageFile2]
ImageData.forEach((image, index) => {
  formData.append('images', image);
});

axios.post(`${Base_url}teacher_signup`, formData)
      .then((response) => {
        console.log('Teacher created successfully:', response.data);
        // Optionally, you can navigate to the login page or perform any other action
        // navigation("/login");
        navigation("/login");
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        alert("Refresh and try again");
      });

  };

  const handelBack = () => {
    setPass(false);
  };

  const handelLogin = () => {
    navigation("/login");
  };

  const handelTrainerSelected = () => {
    setSelectedType("Trainer")
    setValue(0)
    setTrainerSelected(true);
    setPersonalSelected(false);
    setCorporateSelected(false);
  };
  const handelPersonalSelected = () => {
    setSelectedType("Personal")
    setValue(0)
    setPersonalSelected(true);
    setCorporateSelected(false);
    setTrainerSelected(false);
  };

  const handelCorporateSelected = () => {
    setSelectedType("Corporate")
    setValue(0)
    setCorporateSelected(true);
    setTrainerSelected(false);
    setPersonalSelected(false);
  };

  const names = [
    'Neck and Shoulder',
    'Lower Back',
    'Frozen Shoulder',
    'Diabetic',
    'Knee Problem',
    'PCOS & PCOD',
    'Thyroid',
    'Gastric & Constipations',
    'Insomnia',
    'Varicos Vein',
    'High BP',
    'Low BP',
    'Anxiety',
    'Depression',
    'Breathless',
    'Dizziness',
    'Sciatica',
    'Morning Sickness',
    'Oedema (Swelling Joints)',
    'Headache'
  ];

  const Expertise = [
    "Hatha",
    "Vinyasa",
    "Power Yoga",
    "Ashtanga",
    "YIN",
    "Restorative",
    "Meditation",
    "Pranayama (Breath Work)",
    "Kids Yoga",
    "Pre & Postnatal",
    "Mudra",
  ];
  const course = ["B.S.C", "M.S.C", "P.H.D"];

  const handleImageUpload = (event, setImageSrc) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    setUserImageFile1(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setUserImageFile2(e.target.files[0]);
  };
  const handleFileChange3 = (e) => {
    setTeacherImageFile1(e.target.files[0]);
  };

  const handleFileChange4 = (e) => {
    setTeacherImageFile2(e.target.files[0]);
  };

  const handelNext = (value)=>{
    setValue(value)
  }
  const handelPrevious = (value)=>{

    setValue(value)
  }

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ display: "flex", backgroundColor: "#fff" }}>
      
      <div
        style={{
          flex: 1,
          padding: "20px",
          // backgroundColor: "#FFFBF5",
          margin: `${!isMobile ? "30px" : "0px"}`,
          borderRadius: `${!isMobile ? "50px" : "0px"}`,
          // boxShadow:
          //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
        <div style={{ height: "100%" }}>
       
          <div style={{ textAlign: "left" }}>
            <h2>Sign up</h2>
          </div>

          <div style={{ display: "flex" }}>

          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{selectedType}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button
              variant="outlined"
              size="small"
              color={PersonalSelected ? "warning" : "success"}
              onClick={handelPersonalSelected}
            >
              Personal
            </Button>

            <Button
              variant="outlined"
              size="small"
              color={CorporateSelected ? "warning" : "success"}
              style={{ marginLeft: "30px" }}
              onClick={handelCorporateSelected}
            >
              Corporate
            </Button>
            <Button
              variant="outlined"
              size="small"
              color={TrainerSelected ? "warning" : "success"}
              style={{ marginLeft: "30px" }}
              onClick={handelTrainerSelected}
            >
              Trainer
            </Button>
        </AccordionDetails>
      </Accordion>
      
     
           
          </div>

          {!TrainerSelected && (
            <div style={{ marginTop: 30,
              height: "620px",
                overflowY: "auto",
                paddingTop: 5,
            
            }}>
                      <Box sx={{ width: '100%' }}>
      <Box sx={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
      <ThemeProvider theme={orangeTheme}>
        <Tabs value={value} onChange={handleChangetabs} aria-label="basic tabs example" textColor="primary"
        indicatorColor="primary"
       
        >
          <Tab label="Details" {...a11yProps(0)}  style={{backgroundColor:`${value === 0 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}}/>
          <Tab label="Address" {...a11yProps(1)} style={{backgroundColor:`${value === 1 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}} />
          <Tab label="Questions" {...a11yProps(2)}  style={{backgroundColor:`${value === 2 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}}/>
        </Tabs>
        </ThemeProvider>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Grid container spacing={3}>
              <Grid item xs={12}>
      
                  </Grid>
          
              {CorporateSelected && (
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      label="Company Name"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </Grid>
                )}
                {CorporateSelected && (
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      label="Corporate Id"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="corporateId"
                      value={formData.corporateId}
                      onChange={handleChange}
                    />
                  </Grid>
                )}
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AttachMoneyIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Gender"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                

                <Grid item xs={4}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        label="DOB"
                        value={formData.dob}
                        onChange={handleDateChange}
                        format="DD-MM-YYYY"
                        style={{ width: "100%" }}
                      />
                    </LocalizationProvider>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Height"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    label="Weight"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Health issues
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={formData.healthIssues}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        sx={{ overflowX: "hidden !important", width: "100%",overflowY: "hidden !important"}}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox
                              checked={formData.healthIssues.indexOf(name) > -1}
                            />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              
                <Grid item xs={12}>
                <div style={{marginBottom:"20px"}}>
                      <Typography
                        style={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "14px",
                        }}
                      >
                        Portrait Image upload
                      </Typography>
                    </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "20px" }}>
                      {
                        userimageFile1 && <div style={{display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "1px solid #ddd",
                            background: `url(${URL.createObjectURL(userimageFile1)}) center/cover no-repeat`,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                         
                        >
                        
                        </div>
                        </div>
                      }
                      
                      
                      <TextField  type='file'   variant="outlined" onChange={handleFileChange}  />
        
                    </div>

                    <div>
                      {
                        userimageFile2 && <div style={{display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "1px solid #ddd",
                            background: `url(${URL.createObjectURL(userimageFile2)}) center/cover no-repeat`,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          
                        >
                         
                        </div>
                        </div>
                      }
                    
                      <TextField  type='file'   variant="outlined" onChange={handleFileChange2}  />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelNext(1)}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>
              </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={3}>
              
                

               
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Resident permanent address:"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                     <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelPrevious(0)}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelNext(2)}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>


              </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={3}>
            
          

                <Grid item xs={12}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Prior yoga experience "
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="PriorExperience"
                      value={formData.PriorExperience}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="How did u get to know about us ?"
                      variant="outlined"
                      style={{ width: "100%" }}
                      name="howyouknowus"
                      value={formData.howyouknowus}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>
               

                <Grid item xs={12}>
                  <div>
                    <TextareaAutosize
                      style={{
                        width: `${!isMobile ? "98%" : "93%"}`,
                        // backgroundColor: "#FFFBF5",
                        padding: 10,
                      }}
                      aria-label="minimum height"
                      minRows={4}
                      maxRows={5}
                      placeholder="Describe here"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </Grid>

                

                

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                     <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelPrevious(1)}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={handelContinue}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
      </CustomTabPanel>
    </Box>
              
            </div>
          )}

          {TrainerSelected && (
            <div
              style={{
                marginTop: 25,
                height: "600px",
                overflowY: "auto",
                paddingTop: 5,

                // Hide the scrollbar
              }}
            >
                     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <ThemeProvider theme={orangeTheme}>
        <Tabs value={value} onChange={handleChangetabs} aria-label="basic tabs example" textColor="primary"
        indicatorColor="primary">
          <Tab label="Details" {...a11yProps(0)} style={{backgroundColor:`${value === 0 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}} />
          <Tab label="Qualification" {...a11yProps(1)} style={{backgroundColor:`${value === 1 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}} />
          <Tab label="About" {...a11yProps(2)} style={{backgroundColor:`${value === 2 ? "#EE731B" : "#fff"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}}/>
        </Tabs>
        </ThemeProvider>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="name"
                    value={formDataTrainer.name}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="email"
                    value={formDataTrainer.email}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="mobile"
                    value={formDataTrainer.mobile}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        placeholder="DOB"
                        style={{ width: "100%" }}
                        value={formDataTrainer.dob}
                        onChange={handleDateChangeTrainer}
                      />
                    </LocalizationProvider>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Resident permanent Address:"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="Address"
                    value={formDataTrainer.Address}
                    onChange={handleChangeTrainer}
                  />
                </Grid>
             
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="city"
                    value={formDataTrainer.city}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Pincode"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="pincode"
                    value={formDataTrainer.pincode}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="country"
                    value={formDataTrainer.country}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelNext(1)}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>


              
              </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
                  <div>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Teaching Expertise
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={formDataTrainer.Expertise}
                        onChange={handleChangeTrainer3}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        sx={{ overflowX: "hidden", width: "100%" }}
                      >
                        {Expertise.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox
                              checked={
                                formDataTrainer.Expertise.indexOf(name) > -1
                              }
                            />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      padding: 5,
                      // backgroundColor: "#F4EAE0",
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <Typography
                        style={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "14px",
                        }}
                      >
                        Qualification
                      </Typography>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <IconButton onClick={handleAddFields} color="primary">
                        <AddIcon />
                      </IconButton>
                      {inputFields.length > 5 && (
                        <IconButton onClick={handleRemoveFields} color="error">
                          <RemoveIcon />
                        </IconButton>
                      )}
                    </div>
                  </div>
                </Grid>

                {inputFields.map((field, index) => (
                  <Grid item xs={field.id % 5 === 0 ? 12 : 6} key={field.id}>
                    {/* ... your numbering logic ... */}
                    {index % 5 === 0 ? (
                      <div
                        style={{
                          padding: "5px",
                          marginBottom: "5px",
                          width: "100%",
                        }}
                      >
                        {index % 5 === 0 && setCounter + Math.floor(index / 5)}.{" "}
                        {/* Displaying numbering for each set of four input fields */}
                      </div>
                    ) : (
                      <div style={{ padding: "5px", marginBottom: "5px" }}>
                        {/* Displaying numbering for each set of four input fields */}
                      </div>
                    )}
                    {field.label === "Courses" ? (
                      <FormControl sx={{ width: "100%", marginTop: "21px" }}>
                        <InputLabel
                          id={`demo-multiple-checkbox-label-${field.id}`}
                        >
                          {field.label}
                        </InputLabel>
                        <Select
                          value={field.value}
                          onChange={(e) => handleChange2Trainer(e, field.id)}
                          input={<OutlinedInput label={field.label} />}
                          style={{ height: "56px" }}
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
                        style={{ width: "100%" }}
                        value={field.value}
                        onChange={(e) => handleChange3(e, field.id)}
                      />
                    )}
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                     <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelPrevious(0)}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelNext(2)}
                    >
                      Next
                    </Button>
                  </div>
                </Grid>

              
              </Grid>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <Grid container spacing={2}>
             

                <Grid item xs={12}>
                  <TextareaAutosize
                    style={{
                      // backgroundColor: "#FFFBF5",
                      padding: 10,
                      width: `${!isMobile ? "98%" : "93%"}`,
                    }}
                    aria-label="minimum height"
                    minRows={4}
                    maxRows={5}
                    placeholder="Work Experience– 500 words"
                    name="description"
                    value={formDataTrainer.description}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={12}>
                <div style={{marginBottom:"20px"}}>
                      <Typography
                        style={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "14px",
                        }}
                      >
                        Yoga poses images
                      </Typography>
                    </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "20px" }}>
                      {
                        TeacherimageFile1 && <div style={{display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "1px solid #ddd",
                            background: `url(${URL.createObjectURL(TeacherimageFile1)}) center/cover no-repeat`,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                         
                        >
                        
                        </div>
                        </div>
                      }
                      
                      
                      <TextField  type='file'   variant="outlined" onChange={handleFileChange3}  />
        
                    </div>

                    <div>
                      {
                        TeacherimageFile2 && <div style={{display: "flex", alignItems: "center",justifyContent:"center" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "1px solid #ddd",
                            background: `url(${URL.createObjectURL(TeacherimageFile2)}) center/cover no-repeat`,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          
                        >
                         
                        </div>
                        </div>
                      }
                    
                      <TextField  type='file'   variant="outlined" onChange={handleFileChange4}  />
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                     <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={()=>handelPrevious(1)}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#EE731B" }}
                      onClick={handelTrainerContinue}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Grid>
      </CustomTabPanel>
    </Box>
             
            </div>
          )}

          <div
            style={{
              textAlign: "center",
              marginTop: "70px",
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

      {!isMobile && (
        <div
          style={{
            flex: 0.5,
          }}
        >
          <div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "95vh",
                backgroundColor: "#FFFBF5",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                borderRadius: `${!isMobile ? "50px" : "0px"}`,
                margin: `${!isMobile ? "30px" : "0px"}`,
              }}
            >
              <img src={Logo} alt="img" />
            </div>
          </div>
          {/* Add more content as needed */}
        </div>
      )}
    </div>

  );
};
