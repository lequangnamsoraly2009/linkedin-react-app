import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img alt="" src="/images/login-logo.svg"></img>
        </a>
        <div>
          <Join href="/">
              <p>Join Us</p>
            </Join>
          <Log href="/">
            <p>Login</p>
          </Log>
        </div>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1300px;
  margin: auto;
  padding: 12px 0 16px 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 35px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }

  & > div {
    display: flex;
    justify-content: space-around;
  }
`;

const Join = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #666;
  background: #fff;

  &:hover{
    background: #CFCFCF;
    color: #111;
    transition: ease 0.1s;
    border-radius: 5px;
  }

  &>p{
      padding: 8px 20px;
  }

  

`;

const Log = styled.a`
  font-size: 20px;
  text-decoration: none;
  border-radius: 20px;
  border: 2px solid #0e65c2;
  color: #0e65c2;
  margin-left: 15px;

  @media (max-width:768px){
    margin-left: 5px;
    padding: 0;
  }

  &:hover {
    background: #e7f0ff;
    transition: ease 0.1s;

  }

  &>p{
      padding: 5px 20px;
  }
`;

export default Login;
