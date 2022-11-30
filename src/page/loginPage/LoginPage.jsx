import React from "react";
import "./index.scss";
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios"
export default function LoginPage() {
    let navigate = useNavigate(); 
    const routeChangeRegister = () =>{ 
      let path = `/register`; 
      navigate(path);
    }
  useEffect(() => {
    const callAPI = async () => {
      const res = await axios.get("https://nike0403.herokuapp.com/users/login")
    }
  }, [])
  
  return (
    <div className="login_page_body">
      <div className="login_page_body_left"></div>
      <div className="login_page_body_right">
        <div className="login_page_body_right_form">
          <div className="login_page_body_right_input">
            <p>Tên đăng nhập</p>
            <input placeholder="UserName" />
            <p>Mật khẩu</p>
            <input placeholder="PassWord" />
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
