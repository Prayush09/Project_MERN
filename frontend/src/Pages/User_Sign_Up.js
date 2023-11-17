import React from "react";
import Axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

function User_Sign_Up() {
  const navigate = useNavigate();
  const [first_name, set_first_name] = React.useState("");
  const [last_name, set_last_name] = React.useState("");
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [arr, set_arr] = React.useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    set_arr([first_name, last_name, email, password]);
    console.log(arr); //Debugging line
    let data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    Axios.post("http://localhost:4000/api/create/" + email, data)
      .then((res) => {
        if (res.status === 244) {
          alert("Email is already registered");
          navigate("/sign-in");
        } else if (res.status === 200) {
          console.log(arr);
          alert("Email Registered Successfully");
          navigate("/sign-in");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <><Nav/>
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            This is a project Management webpage for your awesome projects.
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                    onChange={(event) => set_first_name(event.target.value)}
                    required
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form1"
                    type="text"
                    required
                    onChange={(event) => set_last_name(event.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                required
                onChange={(event) => set_email(event.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                required
                onChange={(event) => set_password(event.target.value)}
              />

              <MDBBtn className="w-100 mb-4" size="md" onClick={handleSubmit}>
                sign up
              </MDBBtn>
              <div  className="d-flex justify-content-end">
                <Link to="/sign-in">
                <MDBBtn size="sm" outline color="success">Already a member?</MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}

export default User_Sign_Up;