import React from "react";
import "./index.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function LoginPage() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let navigate = useNavigate();
  const routeChangeRegister = () => {
    let path = `/register`;
    navigate(path);
  };

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await axios.get(
          "https://nike0403.herokuapp.com/users/login"
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    callAPI();
  }, []);

  return (
    <div className="login_page_body">
      <div className="login_page_body_left"></div>
      <div className="login_page_body_right">
        <div className="login_page_body_right_form">
          <div className="login_page_body_right_input">
            <p>Tên đăng nhập</p>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                UserName
              </InputLabel>
              <OutlinedInput label="UserName" />
            </FormControl>
            <p>Mật khẩu</p>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div className="login_page_body_right_button">
            <button className="login_page_body_right_button1">Đăng nhập</button>
            <button
              className="login_page_body_right_button2"
              onClick={routeChangeRegister}
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
