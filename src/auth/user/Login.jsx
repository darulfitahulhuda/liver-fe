import React, { useEffect, useState } from "react";
import logo from "../../assets/img/Logo.png";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { authLoginUser } from "../../redux/action/auth/authLoginUser";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [getErrMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const handleloginUser = () => {
    dispatch(
      authLoginUser({
        email: Email,
        password: Password,
      })
    )
      .then((result) => {
        console.log(result, "result");
        if (result.data.data.users.is_admin === false) {
          toast.success(`Hallo ${result.data.data.users.name}, Selamat datang di Liver Academy`);
          navigate("/");
        } else if (result.data.data.users.is_admin === true) {
          toast.success(`Hallo ${result.data.data.users.name} Admin, Selamat datang kembali`);
          navigate("/HomeAdm");
        }
      })
      .catch((err) => {
        if (err.response.data.err === "your account is not verified yet, please verify first") {
          toast.warning("silahkan masukan email untuk mengaktifkan akun");
          navigate("/inputEmail");
        } else if (err.response.status >= 400 && err.response.status <= 500) {
          setErrMsg(err.response.data.err);
        }
      });
  };

  useEffect(() => {
    if (getErrMsg) {
      toast.error(getErrMsg, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [getErrMsg]);

  const register = () => {
    navigate("/register");
  };

  const forgotpswd = () => {
    navigate("/forgetpass");
  };

  return (
    <div className="login-section bg-[#093732] w-screen h-screen flex justify-center items-center">
      <div className="fixed">
        <ToastContainer position="top-right" autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>
      <div className="flex ">
        <div className="side bg-[#F8F8F8] w-[90vw] rounded-tl-xl rounded-bl-xl shadow-xl justify-center flex-col items-center desktop:flex hidden desktop:w-[30vw]">
          <img src={logo} alt="" className="w-40 mt-3" />
          <h1 className="text-2xl text-white font-semibold font-serif">
            <span className="text-[#F2A227]">Learn</span>
            <span className="text-[#116E63]">Every</span>
            <span className="text-[#F2A227]">where</span>
            <span className="text-[#116E63]">Every</span>
            <span className="text-[#F2A227]">time</span>
          </h1>
        </div>

        <div className="wrapper-box bg-white w-[90vw] h-fit rounded-r-xl rounded-l-xl drop-shadow-lg flex items-center justify-center desktop:rounded-l-none desktop:w-[30vw]">
          <div className="content flex flex-col items-center py-4 desktop:mt-0">
            <div className="logo flex flex-row justify-center items-center desktop:mt-4 ">
              <img src={logo} alt="" className="w-20 mt-3" />
            </div>

            <div className="form w-[70vw] desktop:w-[20vw]">
              <div className="pt-2 pb-4">
                <h1 className="text-center text-[#116E63] font-serif font-semibold text-xl ">Login</h1>
                <Form
                  name="normal_login"
                  className="login-form pt-3"
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    name="username"
                    label="Username"
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
                    <Input className={`focus:outline-none focus:ring-2 focus:ring-green-800`} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                  </Form.Item>
                  <div className="mt-1">
                    <p className="text-xs font-medium text-[#116E63] cursor-pointer text-end hover:opacity-90" onClick={forgotpswd}>
                      Forgot Password?
                    </p>
                  </div>

                  <div className="button items-center flex flex-col mt-4 ">
                    <button onClick={handleloginUser} htmlType="submit" className="login-form-button bg-[#116E63] w-full h-12 rounded-xl text-white text-sm hover:opacity-80">
                      Log in
                    </button>
                  </div>

                  <div className="text-sm flex justify-center flex-row font-medium text-gray-500 mt-3 gap-1 cursor-pointer">
                    Don't have an account?{" "}
                    <p className="text-[#116E63] hover:underline" onClick={register}>
                      Regist here
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
