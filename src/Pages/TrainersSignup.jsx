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
import Bg1 from "../assest/bg-sm-5.png";
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
import "./SignUp2.css";
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
import CircularProgress from '@mui/material/CircularProgress';
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
        <Box sx={{ paddingTop:2 }}>
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
export const TrainersSignup = () => {
  const navigation = useNavigate();
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const [loading, setLoading] = useState(false);
    const [Teacherloading, setTeacherLoading] = useState(false);
  const [personName, setPersonName] = React.useState([]);
  const [visibleSection, setVisibleSection] = useState(1);
  const [showPass, setPass] = useState(false);

  const [TrainerSelected, setTrainerSelected] = useState(false);
  const [PersonalSelected, setPersonalSelected] = useState(true);
  const [CorporateSelected, setCorporateSelected] = useState(false);

  const [inputFields, setInputFields] = useState([
    { id: 1, label: "College", value: "" },
    { id: 2, label: "Courses", value: "" },
    // { id: 3, label: "Duration", value: "" },
    { id: 3, label: "Passing Year", value: "" },
    // { id: 5, label: "Additional therapy or courses", value: "" },
  ]);

  const [inputFieldsAc, setInputFieldsAc] = useState([
    { id: 1, label: "Course", value: "" },
    { id: 2, label: "School Name", value: "" },
    { id: 3, label: "Passing Year", value: "" },
   
    
  ]);
  const [setCounter, setSetCounter] = useState(1);
  const [setCounterAc, setSetCounterAc] = useState(1);
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
    password:""
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
    password:"",
    gender:"",
    teachingExperience:""
   
  });
  const [selectedType,setSelectedType] = useState("Personal")
  const [userimageFile1,setUserImageFile1] = useState(null)
  const [userimageFile2,setUserImageFile2] = useState(null)
  const [TeacherimageFile1,setTeacherImageFile1] = useState(null)
  const [TeacherimageFile2,setTeacherImageFile2] = useState(null)
  const [isTCChecked, setTCChecked] = useState(false);

  const [value, setValue] = React.useState(0);

  const handletermandconditionsCheck = () => {
    setTCChecked(!isTCChecked);
  };

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
    const checkedName = event.target.value;

    setFormData((prevFormData) => {
      const updatedHealthIssues = prevFormData.healthIssues.includes(checkedName)
        ? prevFormData.healthIssues.filter((name) => name !== checkedName)
        : [...prevFormData.healthIssues, checkedName];

      return {
        ...prevFormData,
        healthIssues: updatedHealthIssues,
      };
    });
  };

  const handleChangeTrainer3 = (event) => {
   

    const checkedName = event.target.value;

    setFormDatasetFormData((prevFormData) => {
      const updatedExpertise = prevFormData.Expertise.includes(checkedName)
        ? prevFormData.Expertise.filter((name) => name !== checkedName)
        : [...prevFormData.Expertise, checkedName];

      return {
        ...prevFormData,
        Expertise: updatedExpertise,
      };
    });
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

  const handleChange3Ac = (e, id) => {
    const updatedFields = inputFieldsAc.map((field) =>
      field.id === id ? { ...field, value: e.target.value } : field
    );
    setInputFieldsAc(updatedFields);
  };

  const handleAddFields = () => {
    setInputFields((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, label: "College", value: "" },
      { id: prevFields.length + 2, label: "Courses", value: [] },
      // { id: prevFields.length + 3, label: "Duration", value: "" },
      { id: prevFields.length + 3, label: "Passing Year", value: "" },
      
    ]);
    if ((inputFields.length + 1) % 3 === 0) {
      setSetCounter((prevCounter) => prevCounter + 1);
    }
  };

  const handleRemoveFields = () => {
    setInputFields((prevFields) => prevFields.slice(0, prevFields.length - 3));
    if ((inputFields.length - 1) % 3 === 0) {
      setSetCounter((prevCounter) => prevCounter - 1);
    }
  };

  const handleAddFieldsAc = () => {
    setInputFieldsAc((prevFields) => [
      ...prevFields,
      { id: prevFields.length + 1, label: "Course", value: "" },
      { id: prevFields.length + 2, label: "School Name", value: "" },
      { id: prevFields.length + 3, label: "Passing Year", value: "" },
     
      
      
    ]);
    if ((inputFieldsAc.length + 1) % 3 === 0) {
      setSetCounterAc((prevCounter) => prevCounter + 1);
    }
  };

  const handleRemoveFieldsAc = () => {
    setInputFieldsAc((prevFields) => prevFields.slice(0, prevFields.length - 3));
    if ((inputFieldsAc.length - 1) % 3 === 0) {
      setSetCounterAc((prevCounter) => prevCounter - 1);
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
   
    if(!isTCChecked){
      alert('Please accepts Terms & Conditions and Privacy Policy')
      return
    }
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
      "password":formData.password,
      "mobile":formData.mobile,
      "dob": formData.dob,
      "images": [userimageFile1],
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
    userData.health_issues.forEach((el, index) => {
      formData1.append('health_issues', el);
    });
    
    formData1.append("howyouknowus", userData.howyouknowus);
    formData1.append("PriorExperience", userData.PriorExperience);
    formData1.append("description", userData.description);
    setLoading(true)
    axios.post(`${Base_url}student_signup`, formData1)
      .then((response) => {
        setLoading(false)
        console.log('User created successfully:', response.data);
        // Optionally, you can navigate to the login page or perform any other action
        // navigation("/login");
        // alert("User Account created successfully")
        // window.location.href = 'https://sansara-corporate-dashboard.vercel.app';
        navigation("/conformation");
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        setLoading(false)
        alert("Error creating user Refresh and try again");
      });
  };

  const handelTrainerContinue = () => {
  
    if(!isTCChecked){
      alert('Please accepts Terms & Conditions and Privacy Policy')
      return
    }

    for (const key in formDataTrainer) {
      if (formDataTrainer[key] === "") {
        alert(`${key} is required.`);
        return; // Stop the submission process if any field is empty
      }
    }
  
    console.log("Data of map inputs", inputFields);
   
    const formData = new FormData();


formData.append('name', formDataTrainer.name);
formData.append('email', formDataTrainer.email);
formData.append('gender', formDataTrainer.gender);
formData.append('password', formDataTrainer.password);
formData.append('mobile', formDataTrainer.mobile);
formData.append('dob', formDataTrainer.dob);
formData.append('Address', formDataTrainer.Address);
formDataTrainer.Expertise.forEach((el, index) => {
  formData.append('expertise', el);
});

formData.append('city', formDataTrainer.city);
formData.append('pincode', formDataTrainer.pincode);
formData.append('country', formDataTrainer.country);
const qualificationData = JSON.stringify(inputFields);
const additional_courses = JSON.stringify(inputFieldsAc);
formData.append('qualification', qualificationData);
formData.append('additional_courses', additional_courses);
formData.append('teachingExperience', formDataTrainer.teachingExperience);
formData.append('description', formDataTrainer.description);
const ImageData=[TeacherimageFile1,TeacherimageFile2]
formData.append('images', TeacherimageFile1);
formData.append('images', TeacherimageFile2);
setTeacherLoading(true)
axios.post(`${Base_url}teacher_signup`, formData)
      .then((response) => {
        setTeacherLoading(false)
        console.log('Teacher created successfully:', response.data);
        // Optionally, you can navigate to the login page or perform any other action
        // navigation("/login");
        alert("Trainer Account created successfully")
        navigation("/conformation");
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        setTeacherLoading(false)
        alert("Refresh and try again");
      });

  };

  const handelBack = () => {
    setPass(false);
  };

  const handelLogin = () => {
    // navigation("/login");
    window.location.href = 'https://samsarawellness.in/';
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
    "Vinyasa Flow",
    "Iyenger Yoga",
    "Power Yoga",
    "Ashtanga",
    "YIN",
    "Restorative",
    "Meditation",
    "Pranayama (Breath Work)",
    "Kids Yoga",
    "Pre & Postnatal",
    "Mudra",
    "Laughter Yoga",
    "Sound Healing",
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
    <div 
    style={{
      display: 'flex',
      backgroundColor: '#FFEFE8',
      backgroundImage: `url(${Bg1})`,
      backgroundSize: 'cover', // You can adjust the background size as needed
      backgroundPosition: 'center', // You can adjust the background position as needed
      justifyContent: 'center',
      alignItems:"center",
      height:"100vh"
    }}
    >
      
      <div
        style={{
        
          padding: "25px",
          
          margin: `${!isMobile ? "20px" : "0px"}`,
          borderRadius: `${!isMobile ? "30px" : "0px"}`,
          width:`${!isMobile ? "50%" : "100%"}`
          // boxShadow:
          //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
           
        }}
      >
        <div style={{height:"100%"}}>
       
          <div style={{ textAlign: "left" }}>
            <h2 >Sign up</h2>
          </div>

         

         

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
                <Grid item xs={12} sm={6} md={6}>
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

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Sex"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="gender"
                    value={formDataTrainer.gender}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
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

                <Grid item xs={12} sm={6} md={6}>
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

                <Grid item xs={12} sm={6} md={6}>
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

                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="password"
                    value={formDataTrainer.password}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                

                

                <Grid item xs={12} sm={6} md={6}>
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
             
                <Grid item xs={12} sm={6} md={6}>
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

                <Grid item xs={12} sm={6} md={6}>
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

                <Grid item xs={12} sm={6} md={6}>
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
      {/* <Grid item xs={12}>
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
                </Grid> */}



                <Grid item xs={12}>
      <div>
        <Typography style={{fontSize:"16px"}}>Teaching Expertise</Typography>
        <FormControl sx={{ width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {Expertise.map((name) => (
              <MenuItem key={name}  value={name}>
                <Checkbox
                  checked={formDataTrainer.Expertise.includes(name)}
                  onChange={handleChangeTrainer3}
                  value={name}
                  
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </div>
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
                      {inputFields.length > 4 && (
                        <IconButton onClick={handleRemoveFields} color="error">
                          <RemoveIcon />
                        </IconButton>
                      )}
                    </div>
                  </div>
                </Grid>

                {inputFields.map((field, index) => (
                  <Grid item xs={12} sm={12} md={4} key={field.id}>
                    {/* ... your numbering logic ... */}
                    {index % 3 === 0 ? (
                      <div
                        style={{
                          padding: "5px",
                          marginBottom: "5px",
                          width: "100%",
                        
                        }}
                      >
                        {index % 3 === 0 && setCounter + Math.floor(index / 3)}.{" "}
                        {/* Displaying numbering for each set of four input fields */}
                      </div>
                    ) : (
                      <div style={{ padding: "5px", marginBottom: "5px" }}>
                        {/* Displaying numbering for each set of four input fields */}
                      </div>
                    )}
                    {field.label === "Courses" ? (
                      <FormControl sx={{ width: "100%", marginTop: "24px" }}>
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
                            <MenuItem key={name}  value={name} >
                              <ListItemText color="black"  primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        id={`outlined-basic-${field.id}`}
                        label={field.label}
                        variant="outlined"
                        style={{ width: "100%",marginTop:`${field.label === "Passing Year" ? "24px" : "0px"}` }}
                        value={field.value}
                        onChange={(e) => handleChange3(e, field.id)}
                      />
                    )}
                  </Grid>
                ))}


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
                       
                          fontSize: "14px",
                        }}
                      >
                        Additional Courses
                      </Typography>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <IconButton onClick={handleAddFieldsAc} color="primary">
                        <AddIcon />
                      </IconButton>
                      {inputFieldsAc.length > 3 && (
                        <IconButton onClick={handleRemoveFieldsAc} color="error">
                          <RemoveIcon />
                        </IconButton>
                      )}
                    </div>
                  </div>
                </Grid>

                {inputFieldsAc.map((field, index) => (
                  <Grid item xs={12} sm={12} md={4} key={field.id}>
                    {/* ... your numbering logic ... */}
                    {index % 3 === 0 ? (
                      <div
                        style={{
                          padding: "5px",
                          marginBottom: "5px",
                          width: "100%",
                        
                        }}
                      >
                        {index % 3 === 0 && setCounterAc + Math.floor(index / 3)}.{" "}
                        {/* Displaying numbering for each set of four input fields */}
                      </div>
                    ) : (
                      <div style={{ padding: "5px", marginBottom: "5px" }}>
                        {/* Displaying numbering for each set of four input fields */}
                      </div>
                    )}
                   
                      <TextField
                        id={`outlined-basic-${field.id}`}
                        label={field.label}
                        variant="outlined"
                        style={{ width: "100%",marginTop:`${field.label === "Passing Year" || field.label === "School Name" ? "24px" : "0px"}` }}
                        value={field.value}
                        onChange={(e) => handleChange3Ac(e, field.id)}
                      />
                  
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
                  <TextField
                    id="outlined-basic"
                    label="Teaching Experience In Years"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="teachingExperience"
                    value={formDataTrainer.teachingExperience}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextareaAutosize
                    style={{
                      background:"transparent",
                      padding: 10,
                      width: `${!isMobile ? "97%" : "93%"}`,
                    
                      borderColor:"#814151"
                    }}
                    aria-label="minimum height"
                    minRows={4}
                    maxRows={5}
                    placeholder="Work Experience – 500 words"
                    name="description"
                    value={formDataTrainer.description}
                    onChange={handleChangeTrainer}
                  />
                </Grid>

                <Grid item xs={12}>
                <div style={{marginBottom:"20px",marginTop:"20px"}}>
                      <Typography
                        style={{
                          letterSpacing: 1,
                          fontWeight: "bold",
                       
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
                      
                      
                      <input  type='file'    onChange={handleFileChange3} id="noborder" />
        
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
                    
                      <input  type='file'    onChange={handleFileChange4} id="noborder" />
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12}>
                <div style={{display:"flex",justifyContent:"left",alignItems:"center"}}>
      <Checkbox
        checked={isTCChecked}
        onChange={handletermandconditionsCheck}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
       
      />
      <p style={{fontSize:"15px"}}>By creating an account, you agree to Samsara Wellness
<a href="#" style={{color:"blue",marginLeft:"5px",marginRight:"5px",textDecoration:"none"}}>Terms & Conditions</a>
 and 
 <a href="#" style={{color:"blue",marginLeft:"5px",marginRight:"5px",textDecoration:"none"}}>Privacy Policy</a></p>
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
                      disabled={Teacherloading}
                    >
                                   {Teacherloading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        'Submit'
      )}
                    </Button>
                  </div>
                </Grid>

                
              </Grid>
      </CustomTabPanel>
    </Box>
             
            </div>
        

          {/* <div
            style={{
              textAlign: "center",
              marginTop: "70px",
             
            }}
          >
            <p style={{ fontSize: 15, fontWeight: "bold" }}>
              Already have an account?{" "}
              <span
                style={{ color: "#EE731B", fontSize: 16, cursor: "pointer" }}
                onClick={handelLogin}
              >
                Login
              </span>
            </p>
          </div> */}
        </div>
      
      </div>

      
     
    
    </div>

  );
};
