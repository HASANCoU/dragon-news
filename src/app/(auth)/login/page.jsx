"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleForm = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    {
      res && alert("Login Successful!!");
    }
    {
      error && alert(error.message);
    }
  };
  return (
    <div className={`h-[80vh] flex justify-center items-center`}>
      <div className="bg-slate-100 shadow-xl py-10 px-24 rounded-md">
        <h2 className="text-3xl font-bold justify-center my-8">
          Login Your Account
        </h2>
        <hr></hr>
        <form onSubmit={handleSubmit(handleForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              {...register("email", { required: "Email is Required !!!" })}
              className="input"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword?"text":"password"}
              {...register("password", {
                required: "Password is Required !!!",
              })}
              className="input"
              placeholder="Enter Your Password"
            />
            
              <span className="absolute top-4 right-2 text-xl cursor-pointer" onClick={()=>{setIsShowPassword(!isShowPassword)}}>{isShowPassword? <FaEye/>:<FaEyeSlash/>}</span>
            

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>

          <button
            type="submit"
            className="mt-2 btn w-full bg-gray-950 text-white"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Do not Have An Account?{" "}
          <Link href="/register" className="text-blue-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
