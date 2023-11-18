import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  TextField,
  Typography,
  stepperClasses,
} from "@mui/material";
import Logo from "../assest/samsara-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigation = useNavigate();
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const [visibleSection, setVisibleSection] = useState(1);
  const [showPass, setPass] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "+91 ",
    otp: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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

    if(formData.phoneNumber !== "" && formData.phoneNumber !== "+91 "){
      setPass(true);
    }
    if(formData.phoneNumber !== "" && formData.otp !== ""){
     
      window.open('https://samsarawellness.in/', '_blank');
      
    }
   
  };

  const handelBack = () => {
    setPass(false);
  };

  const handelSignUp=()=>{
    navigation("/signup")
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
    <div style={{ display: "flex", height: "100vh",backgroundColor: "#fff", }}>
      {/* Left side - Login Form */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#FFFBF5",
       margin:`${!isMobile ? "30px" : "0px"}`,
       borderRadius:`${!isMobile ? "50px" : "0px"}`,
       boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
     }}>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ marginTop: "-100px", textAlign: "center" }}>
              <img src={Logo} alt="img" />
            </div>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              {showPass && (
                <ArrowBackIcon
                  onClick={handelBack}
                  style={{ marginRight: "10px" }}
                />
              )}
              <h2>Login</h2>
            </div>

            {!showPass && (
              <div>
                <TextField
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  style={{ width: "400px" }}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            )}

            {showPass && (
              <div>
                <TextField
                  id="outlined-basic"
                  label="OTP"
                  variant="outlined"
                  style={{ width: "400px" }}
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  maxLength={4}
                />
              </div>
            )}

            <div
              style={{
                marginTop: "40px",
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

            <div
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: 40,
                width: "400px",
              }}
            >
              <p style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
                Don’t have an account?{" "}
                <span style={{ color: "#EE731B", fontSize: 16,cursor:"pointer" }} onClick={handelSignUp}>Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Scrollable Content */}
      {
        !isMobile && <div
        style={{
          flex: 2,
          overflowY: "auto",
          padding: "40px"
          
        }}
      >
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div
                style={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "50px",
                    letterSpacing: 3,
                    fontWeight: 500,
                  }}
                >
                  Yoga at Home with Expert Teachers - Live!
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ textAlign: "right" }}>
                <img
                  style={{ height: "450px" }}
                  src="https://res.cloudinary.com/dgerdfai4/image/upload/f_auto/v1572073938/website/lp/hero-image-home.jpg"
                  alt="img"
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div style={{ textAlign: "left" }}>
                <img
                  style={{ height: "450px" }}
                  src="https://res.cloudinary.com/dgerdfai4/image/upload/f_auto/v1572073938/website/lp/display-one.jpg"
                  alt="img"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "50px",
                    letterSpacing: 3,
                    fontWeight: 500,
                  }}
                >
                  Elevate Your Practice with Yoga's Best
                </p>
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div
                style={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "50px",
                    letterSpacing: 3,
                    fontWeight: 500,
                  }}
                >
                  The Easy Start <br /> & Stick With It Plan
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ textAlign: "right" }}>
                <img
                  style={{ height: "450px" }}
                  src="https://res.cloudinary.com/dgerdfai4/image/upload/f_auto/v1572073938/website/lp/display-two.jpg"
                  alt="img"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        {/* Add more content as needed */}
      </div>
      }
      
    </div>
  );
};
