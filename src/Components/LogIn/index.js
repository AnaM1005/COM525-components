import React, { useState } from "react";
import styled from "styled-components";
import Heading from "./assets/heading.png";
import Show from "./assets/show.svg";
import Hide from "./assets/hide.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Please enter E-mail").email("Invalid E-mail"),
  password: yup.string().required("Please enter password"),
});

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledBox = styled.div`
  width: 350px;
  height: 536px;
  box-shadow: 0px 4px 20px 5px rgba(196, 196, 196, 0.6);
  border-radius: 10px;
`;

const StyledHeading = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #270d41;
  height: 37px;
  width: 240px;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 18px;
  font-family: Lato;
  color: #270d41;
  margin-left: 3vw;
  margin-bottom: 5px;
  &:after {
    border: 1px solid #d2382e;
  }
`;

const StyledIcon = styled.img`
  margin-left: -35px;
  margin-bottom: -5px;
`;

const StyledErrorText = styled.p`
  color: #d2382e;
  margin-left: 3.5vw;
  .StyledInput {
    border: 1px solid #d2382e;
  }
`;

const StyledButton = styled.button`
  height: 40px;
  width: 240px;
  justify-content: center;
  background: #d6d525;
  color: #ffff;
  text-align: center;
  font-size: 18px;
  border: 1px solid #d6d525;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 3.5vw;
  margin-top: 25px;
  &:hover {
    background: #fff;
    border: 1px solid #d6d525;
    color: #d6d525;
  }
`;

const StyledForgotten = styled.div`
  font-size: 14px;
  color; #270D41;
  margin-left: 7vw;
  margin-top: 3vh;
`;

const StyledCreate = styled.div`
  font-size: 14px;
  color; #270D41;
  margin-left: 8vw;
  margin-top: 3vh;
`;

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  };

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledWrapper>
      {submitted && <h1> You're all done</h1>}
      {!submitted && (
        <StyledBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledHeading>
              <img src={Heading} />
            </StyledHeading>
            <p>
              <StyledErrorText>{errors.email?.message}</StyledErrorText>
              <StyledInput
                type="text"
                placeholder="E-mail"
                {...register("email")}
              />
            </p>
            <p>
              <StyledErrorText> {errors.password?.message}</StyledErrorText>
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
              />
              <StyledIcon
                src={showPassword ? Show : Hide}
                onClick={handleClick}
              ></StyledIcon>
            </p>
            <p>
              <StyledButton> Log In </StyledButton>
            </p>
            <StyledForgotten>
              <p>Forgotten password?</p>
            </StyledForgotten>
            <StyledCreate>
              <p>Create Account</p>
            </StyledCreate>
          </form>
        </StyledBox>
      )}
    </StyledWrapper>
  );
};

export default LogIn;