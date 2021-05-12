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
          <SignIn href="/">
            <p>Sign in</p>
          </SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <LocalLogin>
            <Email type="email" placeholder="Email or phone number"></Email>
            <Password
              type="password"
              placeholder="Your password if you remember"
            ></Password>
            <ButtonSignIn href="/">Sign in</ButtonSignIn>
            <Google>
            <img src="/images/google.svg" alt="Google signin" />
            Sign In With Google
          </Google>
          </LocalLogin>    
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
  padding-left: 10px;
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
  color: rgba(0, 0, 0, 0.5);
  background: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
    transition: ease 167ms;
    border-radius: 5px;
  }

  & > p {
    padding: 8px 20px;
  }
`;

const SignIn = styled.a`
  box-shadow: inset -2px -2px 0px 1px #0a66c2;
  font-size: 20px;
  text-decoration: none;
  border-radius: 20px;
  border: 1px solid #0e65c2;
  color: #0e65c2;
  margin-left: 15px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-left: 5px;
    padding: 0;
  }

  &:hover {
    background: #e7f0ff;
    transition: ease 167ms;
  }

  & > p {
    padding: 5px 20px;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  /* display: flex; */
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 60px;
    color: #2977c9;
    font-weight: 200;
    line-height: 71px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 30px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 750px;
    height: 700px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      overflow-x: hidden;
      position: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 40%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

// Login with account local
const LocalLogin = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0 40px;
  }
`;

const Email = styled.input`
  margin-bottom: 15px;
  height: 45px;
  border-radius: 5px;
  font-size: 16px;
`;

const Password = styled.input`
  margin-bottom: 15px;
  height: 45px;
  border-radius: 5px;
  font-size: 16px;
`;

const ButtonSignIn = styled.button`
  margin-bottom: 15px;
  height: 50px;
  border-radius: 30px;
  background: #2977c9;
  border: 1px solid #fff;
  font-size: 16px;
  color: #fff;

  &:hover {
    background: #29779a;
  }
`;

// Login with account google
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 28px;
  vertical-align: middle;
  font-size: 16px;
  /* transition-duration: 0.16s; */
  border: 1px solid #888;
  & > img {
    margin-right: 15px;
  }

  &:hover{
    background-color: rgba(207, 207, 207, 0.25);
    border: 2px solid #111;
    transition-duration: 0.16s;
  }

  @media (max-width: 768px){
    width: 100%;
    margin: auto;
}
`;

export default Login;
