import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Ragister = () => {
  const [signupData, setsignupData] = useState({});
  let navigate = useNavigate();

  const handlechange = (e) => {
    let { name, value } = e.target;
    setsignupData({ ...signupData, [name]: value });
  };

  let userinfo = JSON.parse(localStorage.getItem("userinfo")) || [];
  const handlesubmit = (e) => {
    e.preventDefault();
    userinfo = [...userinfo, signupData];
    localStorage.setItem("userinfo", JSON.stringify(userinfo));
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlesubmit}>
        <h1>Create a new account</h1>
        <br />
        <p>
          Create an account to continue enjoying uninterrupted video and
          persnolized experiance
        </p>
        <br />
        <div>
          <Button
            bg="white"
            color={"pink.400"}
            variant="outline"
            size={"lg"}
            w="100%"
            leftIcon={
              <img
                width={"40px"}
                src="https://cdn.icon-icons.com/icons2/730/PNG/512/google_icon-icons.com_62798.png"
                alt=""
              />
            }
          >
            Sign in
          </Button>
        </div>

        <div className={styles.or}>
          <h3>or</h3>
        </div>
        <div className={styles.inpDiv}>
          <Input
            placeholder="Email ID or Mobile Number"
            border={"none"}
            borderBottom="2px"
            name="email"
            type="email"
            borderRadius={"none"}
            size="md"
            onChange={handlechange}
          />{" "}
          <br />
          <br />
          <Input
            placeholder="Password"
            borderRadius={"none"}
            type="password"
            border={"none"}
            name="password"
            onChange={handlechange}
            borderBottom="2px"
            size="md"
          />{" "}
          <br /> <br />
          <p>
            By procedding you are agree to our{" "}
            <a href="/#">terms of services and privacy policy</a>
          </p>
          <br />
          <Button
            type="submit"
            colorScheme="teal"
            size={"lg"}
            w="100%"
            variant="outline"
          >
            Ragister
          </Button>
        </div>
        <div>
          <br />
          <p>
            Already ragistered ?{" "}
            <Link color="blue" to={"/login"}>
              Login
            </Link>{" "}
          </p>{" "}
          <br /> <br />
        </div>
      </form>
    </div>
  );
};

export default Ragister;
