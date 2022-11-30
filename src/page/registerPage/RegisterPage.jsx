import React from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  firstname: yup.string().required("không được để trống "),
  lastname: yup.string().required("không được để trống "),
  email: yup.string().email().required("không được để trống "),
  age: yup.string().required("không được để trống "),
  password: yup.string().min("4").max("10").required("không được để trống "),
  passwordagain: yup.string().oneOf([yup.ref("password"), null]),
});
export default function RegisterPage() {
  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="res_body">
      <div className="res_body_form">
        <div className="res_body_form_userInput">
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              {...register("firstname", { required: "Required" })}
            />
            <h6>{errors.firstname?.message}</h6>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              {...register("lastname", { required: "Required" })}
            />{" "}
            <h6>{errors.lastname?.message}</h6>
            <input
              type="text"
              name="email"
              placeholder="email"
              {...register("email", { required: "Required" })}
            />{" "}
            <h6>{errors.email?.message}</h6>
            <input
              type="text"
              name="age"
              placeholder="age"
              {...register("age", { required: "Required" })}
            />{" "}
            <h6>{errors.age?.message}</h6>
            <input
              type="text"
              name="password"
              placeholder="password"
              {...register("password", { required: "Required" })}
            />{" "}
            <h6>{errors.password?.message}</h6>
            <input
              type="text"
              name="passwordagain"
              placeholder="passwordagain"
              {...register("passwordagain", { required: "Required" })}
            />{" "}
            <h6>{errors.passwordagain && "Mật khẩu không trùng với mật khẩu mới"}</h6>
            <button type="submit">Hoàn Thành</button>
          </form>
        </div>
      </div>
    </div>
  );
}
