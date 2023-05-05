import React from "react";
import CustomButton from "../../atoms/button/button";
import Dialog from "@mui/material/Dialog";
import TwitterIcon from "@mui/icons-material/Twitter";
import SignupStyle from "../signup/signup.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  

  const navigate = useNavigate();
  const route = () => {
    let path = "/register";
    navigate(path);
  };
  return (
    <Dialog open className={SignupStyle.dialog}
    PaperProps={{
      style: {
        borderRadius: "20px",
      },
      sx:{width:"80%", height:"70%"}
    }}>
      <div className={SignupStyle.icon}>
        <TwitterIcon className={SignupStyle.image} sx={{fontWeight:"900px" , fontSize:"2rem"}} />
      </div>

      <div className={SignupStyle.container}>
        <span className={SignupStyle.headin}>
          Join Twitter Today
        </span>
        <div className={SignupStyle.btn}>
          <GoogleIcon className={SignupStyle.mui} />

          <CustomButton buttonText="Sign in with Google" />
        </div>

        <div className={SignupStyle.btn}>
          <AppleIcon />
          <CustomButton text="Sign in with Apple" />
        </div>

       <h5 className={SignupStyle.heading1}>-------------------- or ---------------------</h5>
        <div className={SignupStyle.btn}>
          <CustomButton
            teext="Sign in with a phone or email"
            onClicking={route}
          />
        </div>
        <div className={SignupStyle.para}>
          <p>
            By signing up, you agree to the{" "}
            <span className={SignupStyle.footer} >
              {" "}
              Terms of Service
            </span>{" "}
            and{" "}
            <span className={SignupStyle.footer}>
              {" "}
              Privacy Policy{" "}
            </span>{" "}
            , including{" "}
            <span className={SignupStyle.footer}> Cookie Use.</span>
          </p>
        </div>
        <div className={SignupStyle.login}>
          <p> Have an account already?</p>
          <Link to="/signin" className={SignupStyle.link}>
            Log in
          </Link>
        </div>
      </div>
    </Dialog>
  );
}
