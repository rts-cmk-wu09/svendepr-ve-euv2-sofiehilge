import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import Hero from "../components/Hero";
import SecondaryHero from "../components/SecondaryHero";

const LogIn = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState(false);

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Login failed:", error);
      if (error.message === "login failed") {
        setLoginError(true);
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="mt-[74px]">
        <Hero text={"believe yourself"} />
        <SecondaryHero
          color={"#000"}
          bgColor={"#000"}
          text={"Train like a pro"}
        />
      </div>
      <div className="pl-[20px] mt-[60px]">
        <p className="text-[18px] font-[600] leading-4 pb-[15px]">
          Log in with your credentials
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("user", { required: true })}
            placeholder="Enter your email..."
            className="inputBorder"
          />
          <input
            {...register("password", { required: true })}
            placeholder="Enter your password..."
            className="inputBorder"
            />
            {/* Display error message for invalud login info */}
            {errors.user && (
              <p className="flex flex-col items-center text-[18px] font-[600] leading-4 pb-[15px] mt-[15px]">
                Please provide your email
              </p>
            )}
            {errors.password && (
              <p className="flex flex-col items-center text-[18px] font-[600] leading-4 pb-[15px] mt-[15px]">
                Please enter a password
              </p>
            )}
            {/* display error message for failed login */}
            {loginError && (
              <div className="flex flex-col items-center">
                <p className="text-[18px] font-[600] leading-4 pb-[15px] mt-[15px]">
                  Invalid login information
                </p>
                <p className="text-[18px] font-[600] leading-4 pb-[15px]">
                  Please try again
                </p>
              </div>
            )}
          <Button
            type="submit"
            text="log in"
            width="334px"
            className="mb-[15px] mt-[5px]"
          />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
