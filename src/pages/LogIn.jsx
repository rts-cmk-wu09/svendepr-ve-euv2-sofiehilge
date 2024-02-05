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

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("login failed");
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
            className="w-[335px] h-[50px] rounded-[25px] border border-solid border-[#D4D4D4] text-[#000] bg-[#FBFBFB] mb-[15px] pl-[35px]"
          />
          <input
            {...register("password", { required: true })}
            placeholder="Enter your password..."
            className="w-[335px] h-[50px] rounded-[25px] border border-solid border-[#D4D4D4] text-[#000] bg-[#FBFBFB] mb-[15px] pl-[35px]"
          />
          <Button
            type="submit"
            text="log in"
            width="334px"
            className="mb-[15px]"
          />
          {errors.user && <p className="text-[18px] font-[600] leading-4 pb-[15px] mt-[15px]">Please provide your email</p>}
          {errors.password && <p className="text-[18px] font-[600] leading-4 pb-[15px] mt-[15px]">Please enter a password.</p>}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
