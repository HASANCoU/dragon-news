"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegisterForm = async (data) => {
    const { email, name, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    {
      error && alert(error.message);
    }
    {
      res && alert("Registration Successful!!");
    }
  };
  return (
    <div className={`h-[80vh] flex justify-center items-center my-20`}>
      <div className="bg-slate-100 shadow-xl py-10 px-24 rounded-md">
        <h2 className="text-3xl font-bold justify-center my-8">
          Register Your Account
        </h2>
        <hr></hr>
        <form onSubmit={handleSubmit(handleRegisterForm)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name is Required !!!" })}
              className="input w-full"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Photo URL</legend>
            <input
              type="text"
              {...register("photo", { required: "Photo is Required !!!" })}
              className="input w-full"
              placeholder="Your Photo"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              {...register("email", { required: "Email is Required !!!" })}
              className="input w-full"
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword?"text":"password"}
              {...register("password", {
                required: "Password is Required !!!",
              })}
              className="input w-full"
              placeholder="Enter Your Password"
            />
            <span className="absolute to" onClick={()=>{setIsShowPassword(!isShowPassword)}}>{isShowPassword?<FaEye/>:<FaEyeSlash/>}</span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>

          <button
            type="submit"
            className="mt-2 btn w-full bg-gray-950 text-white"
          >
            Register
          </button>
        </form>
        <p className="text-center">
          Already Have An Account?{" "}
          <Link href="/login" className="text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
