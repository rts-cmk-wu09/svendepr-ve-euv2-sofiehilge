import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

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
      console.error("Login failed:", error)
      throw new Error("login failed")
    }
  };

  return (
    <>
      <h1>Believe Yourself</h1>
      <h4>Train like a pro</h4>
      <p>Log in with your credentials</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("user", { required: true })}
          placeholder="Enter your email..."
          className="w-[335px] h-[50px] rounded-[25px] border border-solid border-[#D4D4D4] text-[#D4D4D4] bg-[#FBFBFB]"
        />
        {errors.user && <p>Email is required</p>}
        <input
        {...register("password", {required:true})}
        placeholder="Enter your password..."
        className="w-[335px] h-[50px] rounded-[25px] border border-solid border-[#D4D4D4] text-[#D4D4D4] bg-[#FBFBFB]"
        />
        {errors.password && <p>Password is required</p>}
        <Button type="submit" text="log in" width="334px"/>
      </form>
    </>
  );
};

export default LogIn;
