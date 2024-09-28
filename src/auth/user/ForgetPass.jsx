import React, { useState } from "react";
import logo from "../../assets/img/Logo.png";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getForgetPassAction } from "../../redux/action/auth/getForgetPass";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const ForgetPass = () => {
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = async () => {
    const forget = await dispatch(
      getForgetPassAction({
        email: Email,
      })
    );
    if (forget) {
      console.log(forget, "Forget");
      toast.success(`Tautan reset password terkirim, Periksa Email ${Email}`);
    }
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
                  name="email"
                  label="Email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username",
                    },
                  ]}
                  hasFeedback
                >
                  <Input className={`focus:outline-none focus:ring-2 focus:ring-green-800`} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <div className="button  items-center  flex flex-col mt-4 ">
                  <button onClick={handleSave} htmlType="submit" className="login-form-button bg-[#116E63] w-full h-12 rounded-xl text-white text-sm">
                    Save
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
