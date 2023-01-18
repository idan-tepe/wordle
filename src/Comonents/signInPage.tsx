import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavBarContext } from "../contexts/navBarContext";
import { useNavigate } from "react-router-dom";
import { INavBar } from "../App";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

export function SignInPage() {
  const { register, handleSubmit } = useForm();
  const { setUser } = useContext(NavBarContext) as INavBar;
  const navigate = useNavigate();

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your User Name and your Password!
              </p>

              <form
                onSubmit={handleSubmit((data) => {
                  navigate("/game");
                  localStorage.setItem(
                    "dataKey",
                    JSON.stringify(data.userName)
                  );
                  // setData(data);
                  setUser(data.userName);
                })}
              >
                <MDBInput
                  className="mt-2"
                  {...register("userName", { required: true })}
                  placeholder="User Name"
                />
                <MDBInput
                  className="mt-2"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                />
                <MDBInput type="submit" className="mt-2" />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
