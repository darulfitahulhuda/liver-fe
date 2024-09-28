import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../services/auth/authLogin";
import { Input } from "@nextui-org/react";

export const LoginAdmin = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);

  const shwpswd = () => {
    setShowPassword(!ShowPassword);
  };
  const forgotpswd = () => {
    navigate("/forgetpass");
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const { mutate: postLogin, data: errMsg, status } = useLoginUser();

  const handleSubmit = () => {
    postLogin({
      email: Email,
      password: Password,
    });
  };
  return (
    <div className="login-section bg-slate-600 w-screen h-screen flex justify-center items-center">
      <div className="side bg-[#F8F8F8] w-[90vw] h-[70vh] lg:w-[30vw] rounded-tl-xl rounded-bl-xl shadow-xl lg:flex hidden justify-center flex-col items-center">
        <img src={logo} alt="" className="w-40 mt-3" />
        <h1 className="text-2xl text-white font-semibold font-serif">
          <span className="text-[#F2A227]">Learn</span>
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">where</span>
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">time</span>
        </h1>
      </div>
      <div className="wrapper-box bg-white w-[90vw] lg:h-[70vh] h-fit lg:w-[30vw] rounded-r-xl rounded-l-xl lg:rounded-l-none  drop-shadow-lg flex items-center  justify-center">
        <div className="content  flex flex-col items-center py-4 lg:mt-0">
          <div className="logo flex flex-row justify-center items-center lg:mt-4 ">
            <img src={logo} alt="" className="w-20 mt-3" />
          </div>

          <div className="form w-[70vw] lg:w-[20vw]">
            <div className="">
              <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">
                Login Admin
              </h1>

              {/* <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <div>
                  <Input
                    isClearable
                    isRequired
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder="Enter your email"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs"
                  />
                </div>
                <div>
                  <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    className="max-w-xs"
                  />
                  <button
                    className="focus:outline-none absolute cursor-pointer right-2"
                    type="button"
                    onClick={shwpswd}
                  >
                    {ShowPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div> */}
                <div className="flex flex-col gap-2">
                  <span>Email</span>
                  <input
                    onChange={handleInput}
                    id="email"
                    className="px-3 py-2 bg-[#ffff] ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="You@Example.com"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span>Password</span>
                  <div className="relative flex items-center">
                    <input
                      onChange={handleInput}
                      id="password"
                      className="px-3 py-2 bg-[#ffff] ring-1 ring-slate-400 placeholder-slate-600 rounded-md outline-none focus:ring-2 focus:ring-green-600 w-full"
                      placeholder="Password here..."
                      type={ShowPassword ? "text" : "password"}
                    />
                    <div
                      className="absolute cursor-pointer right-2"
                      onClick={shwpswd}
                    >
                      {ShowPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              <div className="mt-2 flex justify-end">
                <p
                  className="text-sm font-medium text-[#116E63] cursor-pointer w-[120px] text-end"
                  onClick={forgotpswd}
                >
                  Forgot Password?
                </p>
              </div>

              <div className="button  items-center  flex flex-col mt-4 ">
                <button
                  onClick={handleSubmit}
                  htmlType="submit"
                  className="login-form-button bg-[#116E63] w-full h-12 rounded-xl text-white text-sm"
                >
                  Log in
                </button>

                {/* Oauth Google & Facebook */}
                <div className="flex items-center gap-4">
                  <hr className="w-full bg-black" />
                  <div>OR</div>
                  <hr className="w-full bg-black" />
                </div>
                <div className="flex flex-row gap-5 items-center justify-center">
                  <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-[#116E63] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                    <div>
                      <img
                        className="w-[20px] h-[20px]"
                        src={google}
                        alt="google"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center shadow-lg bg-slate-800 hover:bg-[#116E63] border-2 border-inherit rounded-2xl w-[50px] h-[50px] cursor-pointer">
                    <div>
                      <img
                        className="w-[28px] h-[28px]"
                        src={facebook}
                        alt="facebook"
                      />
                    </div>
                  </div>
                </div>
                {/* Oauth End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
