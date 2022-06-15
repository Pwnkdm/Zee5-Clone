import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/actions";
import styles from "./login.module.css";

const Login = () => {
  const [loginData, setloginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    let { name, value } = e.target;

    setloginData({ ...loginData, [name]: value });
  };

  let userinfo = JSON.parse(localStorage.getItem("userinfo")) || "";
  const handlesubmit = (e) => {
    e.preventDefault();
    if (userinfo === "") {
      alert("User Not Found Please create a account");
      navigate("/signup");
    } else {
      let flag = false;
      for (let i = 0; i < userinfo.length; i++) {
        if (
          userinfo[i].email === loginData.email &&
          userinfo[i].password === loginData.password
        ) {
          flag = true;
          localStorage.setItem("loginperson", JSON.stringify(userinfo[i]));
        }
      }
      if (flag === true) {
        dispatch(login());
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handlesubmit}>
        <h1>Login To ZEE5</h1>
        <br />
        <p>Login to continue uninterrupted video and personalized experiance</p>
        <br />
        <div className={styles.logo}>
          <img
            width={"40px"}
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/apple-512.png"
            alt=""
          />
          <img
            width={"40px"}
            src="https://cdn.icon-icons.com/icons2/730/PNG/512/google_icon-icons.com_62798.png"
            alt=""
          />
          <img
            width={"40px"}
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png"
            alt=""
          />
          <img
            width={"40px"}
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            alt=""
          />
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
            onChange={handlechange}
            size="md"
          />{" "}
          <br />
          <br />
          <Input
            placeholder="Password"
            borderRadius={"none"}
            onChange={handlechange}
            name="password"
            type="password"
            border={"none"}
            borderBottom="2px"
            size="md"
          />{" "}
          <br /> <br />
          <Button
            type="submit"
            colorScheme="teal"
            size={"lg"}
            w="100%"
            variant="outline"
          >
            Login
          </Button>
        </div>
        <div>
          <br />
          <p>
            New To ZEE5 ?{" "}
            <Link color="blue" to={"/signup"}>
              Ragister
            </Link>{" "}
          </p>{" "}
          <br /> <br />
        </div>
      </form>
    </div>
  );
};

export default Login;
