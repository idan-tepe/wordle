import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavBarContext } from "../contexts/navBarContext";
import { useNavigate } from "react-router-dom";

export function SignInPage() {
  const { register, handleSubmit } = useForm();
  const { setUser } = useContext(NavBarContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1> sign in </h1>
      <form
        onSubmit={handleSubmit((data) => {
          navigate("/game");
          setUser(data.userName);
        })}
      >
        <input
          {...register("userName", { required: true })}
          placeholder="User Name"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
