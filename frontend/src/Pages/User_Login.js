import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function User_Login() {
  const navigate = useNavigate();
  const [data_arr, set_data_arr] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function isValidate() {
    set_data_arr({ email: email, password: password });
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    Axios.get("http://localhost:4000/api/isValidate/" + email)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.length === 0) {
            alert("Email is not registered");
            navigate("/sign-up");
          } else {
            if (res.data[0].password === password) {
              alert("Login successfully");
              navigate("/User-Dashboard"); //navigation to User-Dashboard
            } else {
              alert("Password is incorrect");
            }
          }
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={(event) => setEmail(event.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg" onClick={isValidate}>
            Sign in
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default User_Login;
