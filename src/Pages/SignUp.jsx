import bgImg from "../assets/reservation/wood-grain-pattern-gray1x.png";
import img from "../assets/others/authentication2.png";
import fbIcon from "../assets/icon/facebook1.svg";
import GoogleIcon from "../assets/icon/google1.svg";
import gitHubIcon from "../assets/icon/github1.svg";

// react-icons
import { HiEyeOff, HiEye } from "react-icons/hi";

// Material Tailwind
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
// React Hook Form
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, Navigate } from "react-router-dom";
// React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        if (user) {
          toast.success("User create successfully!");
        }
        setTimeout(() => {
          Navigate("/");
        }, 2000);
        console.log(user);

        // Update a user's profile
        // updateProfile(user, {
        //   displayName: name,
        //   photoURL: photo,
        // })
        //   .then(() => {
        //     toast.success("Profile updated!");
        //   })
        //   .catch((error) => {
        //     toast.error(error);
        //   });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          toast.error("Invalid Email & Password! Try again");
        }
      });
  };

  const [passwordIcon, setShowPassword] = useState(false);
  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };

  return (
    <div
      className="h-full lg:h-screen   lg:flex items-center "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Helmet>
        <title>Bistro Boss Restaurant | Sign Up</title>
      </Helmet>

      <div className="w-11/12   lg:w-10/12  mx-auto flex flex-col items-center lg:flex-row-reverse  lg:shadow-xl">
        <div className=" lg:w-6/12 mx-auto ">
          <img src={img} alt="" />
        </div>

        <div className=" w-full lg:w-6/12 mt-5 md:mt-0 md:pt-5 lg:pt-0 ">
          <h2 className="text-center text-[#151515] text-2xl lg:text-4xl font-semibold lg:font-bold">
            Sign Up
          </h2>

          <Card
            color="transparent"
            shadow={false}
            className=" lg:w-9/12 mx-auto py-5"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" mb-2 w-11/12 lg:w-10/12 mx-auto  "
            >
              <div className="mb-1  flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Name
                </Typography>

                <Input
                  {...register("name")}
                  type="text"
                  name="name"
                  size="lg"
                  label="Enter Your Name"
                  className="bg-white"
                  required
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email
                </Typography>

                <Input
                  {...register("email")}
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
                    {...register("password", {
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).*$/,
                    })}
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
                {/* password validation */}
                {errors.password?.type === "minLength" && (
                  <small className="text-red-500">
                    Password must be at least 6 characters or longer
                  </small>
                )}
                {errors.password?.type === "maxLength" && (
                  <small className="text-red-500">
                    Password must be less than 20 characters.
                  </small>
                )}
                {errors.password?.type === "pattern" && (
                  <small className="text-red-500">
                    Password must contain at least one special and one upper
                    case character.
                  </small>
                )}
              </div>

              <Button
                type="submit"
                className="mt-4 bg-[#D1A054B2]  font-semibold  text-white"
                fullWidth
              >
                sign In
              </Button>

              <Typography className="mt-4  text-center font-normal text-[#d4973cb2]">
                Already registered? Go to
                <Link
                  to="/login"
                  className=" hover:font-semibold text-[#444] hover:text-black pl-1 "
                >
                  Login
                </Link>
              </Typography>

              {/* another sing-up way */}
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;
