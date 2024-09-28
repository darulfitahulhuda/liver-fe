import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getUpdatePass } from "../../redux/action/auth/getForgetPass";
import { toast } from "react-toastify";
import { authLoginUser } from "../../redux/action/auth/authLoginUser";

export const UpdatePass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [Password, setPassword] = useState("");
  const [PasswordConfirmation, setPasswordConfirmation] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");
  const handleSave = async () => {
    const updatepass = await dispatch(
      getUpdatePass(
        {
          password: Password,
          password_confirmation: PasswordConfirmation,
        },
        token,
        email
      )
    );
  };

  const backHome = () => {
    navigate("/login");
  };
  return (
    <div className="forgetpass-section bg-[#093732] w-screen h-screen flex justify-center items-center">
      <div className="side bg-[#F8F8F8] w-[90vw] h-[70vh] justify-center flex-col items-center rounded-tl-xl rounded-bl-xl shadow-xl desktop:w-[30vw] desktop:flex hidden">
        <img src={logo} alt="" className="w-40 mt-3" />
        <h1 className="text-2xl text-white font-semibold font-serif">
          <span className="text-[#F2A227]">Learn</span>
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">where</span>
          <span className="text-[#116E63]">Every</span>
          <span className="text-[#F2A227]">time</span>
        </h1>
      </div>
      <div className="wrapper-box bg-white w-[90vw] h-fit rounded-r-xl rounded-l-xl drop-shadow-lg flex items-center justify-center desktop:w-[30vw] desktop:h-[70vh] desktop:rounded-l-none">
        <div className="content flex flex-col items-center py-4 desktop:mt-0">
          <div className="logo flex flex-row justify-center items-center desktop:mt-4 ">
            <img src={logo} alt="" className="w-20 mt-3" />
          </div>

          <div className="form w-[70vw] desktop:w-[20vw]">
            <div className="">
              <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl">Forget Password</h1>
              <Form
                name="normal_login"
                className="login-form pt-3"
                colon={false}
                initialValues={{
                  remember: true,
                }}
                // onFinish={onLogin}
              >
                <Form.Item
                  name="newpassword"
                  label="New Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 6,
                      message: "Password must have a minimum length of 6",
                    },
                    {
                      pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"),
                      message: "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="New Password here" />
                </Form.Item>
                <Form.Item
                  name="ConfirmNewpassword"
                  label="Confirm Password"
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                  }}
                  dependencies={["newpassword"]}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newpassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("The password doesn't match");
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm New Password" />
                </Form.Item>
                <div className="button  items-center  flex flex-col mt-4 ">
                  <button onClick={handleSave} htmlType="submit" className="login-form-button bg-[#116E63] w-full h-12 rounded-xl text-white text-sm">
                    Save
                  </button>
                </div>
                <div className="mt-1">
                  <p className="text-sm font-medium text-[#116E63] cursor-pointer text-end" onClick={backHome}>
                    Login
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
