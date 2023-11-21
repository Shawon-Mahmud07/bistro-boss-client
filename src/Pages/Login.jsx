import bgImg from "../assets/reservation/wood-grain-pattern-gray1x.png";
import img from "../assets/others/authentication2.png";
import fbIcon from "../assets/icon/facebook1.svg";
import GoogleIcon from "../assets/icon/google1.svg";
import gitHubIcon from "../assets/icon/github1.svg";
// react simple captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
// Material Tailwind
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// react-icons
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useEffect, useState } from "react";

const Login = () => {
  const [passwordIcon, setShowPassword] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [successInfo, setSuccessInfo] = useState(false);
  const [wrongInfo, setWrongInfo] = useState(null);

  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };
  // react-simple-captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaValue;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setSuccessInfo(true);
      setWrongInfo(false);
    } else {
      setWrongInfo(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div
      className="h-full lg:h-auto lg:flex items-center py-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-11/12 py-4 lg:pb-0 lg:w-10/12 mx-auto flex flex-col items-center lg:flex-row  lg:shadow-xl">
        <div className=" lg:w-6/12 mx-auto">
          <img className="flex justify-center items-center" src={img} alt="" />
        </div>

        <div className=" w-full lg:w-6/12 mt-5 md:mt-0">
          <h2 className="text-center text-[#151515] text-2xl lg:text-4xl font-semibold lg:font-bold">
            Login
          </h2>

          <Card
            color="transparent"
            shadow={false}
            className=" lg:w-9/12 mx-auto py-5"
          >
            <form
              onSubmit={handleSubmit}
              className=" mb-2 w-11/12 lg:w-10/12 mx-auto  "
            >
              <div className="mb-1  flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email
                </Typography>

                <Input
                  type="email"
                  name="email"
                  size="lg"
                  label="Enter Your Email"
                  className="bg-white"
                  required
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <div className="relative">
                  <Input
                    name="password"
                    type={passwordIcon ? "text" : "password"}
                    size="lg"
                    label="Enter Your Password"
                    className="bg-white"
                    required
                  />
                  <div
                    onClick={showPassword}
                    className="absolute top-1/2 -translate-y-1/2 right-2.5"
                  >
                    {passwordIcon ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <LoadCanvasTemplate />
                  </div>
                  {/* captcha Input field */}
                  <Input
                    type="text"
                    size="lg"
                    value={captchaValue}
                    onChange={(e) => setCaptchaValue(e.target.value)}
                    placeholder="Type Above Text"
                    className=" !border-t-blue-gray-200 bg-white focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />

                  {/* Captcha validate Btn */}
                  <Button
                    onClick={handleValidateCaptcha}
                    className="mt-4 mb-1 bg-[#5c503fb2]  font-semibold  text-white"
                  >
                    Validate Captcha
                  </Button>

                  {/* validation wrong or success info... */}
                  {successInfo && (
                    <p className="text-green-500 text-sm font-medium">
                      validation successful.
                    </p>
                  )}
                  {wrongInfo && (
                    <p className="text-red-500 text-sm font-medium">
                      wrong validation, try again.
                    </p>
                  )}
                </div>
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button
                disabled={disabled}
                type="submit"
                className="mt-4 bg-[#D1A054B2]  font-semibold  text-white"
                fullWidth
              >
                sign In
              </Button>

              <Typography className="mt-4  text-center font-normal text-[#d4973cb2]">
                New here?
                <a href="#" className="font-medium pl-1 ">
                  Create a New Account
                </a>
              </Typography>

              {/* another login way */}
              <Typography className="mt-2 text-[#444] lg:text-lg text-center font-medium">
                Or sign in with
              </Typography>
              {/* icon */}
              <div className="flex justify-center gap-5 items-center mt-3">
                <div className="border-[#444] cursor-pointer border-2 rounded-full p-0.5">
                  <img src={fbIcon} alt="" />
                </div>
                <div className="border-[#444] cursor-pointer border-2 rounded-full p-1">
                  <img src={GoogleIcon} alt="" />
                </div>
                <div className="border-[#444] cursor-pointer border-2 rounded-full p-1">
                  <img src={gitHubIcon} alt="" />
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
