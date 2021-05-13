import styled from "styled-components";
const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="logohome" />
          </a>
        </Logo>
        <SearchNav>
          <div>
            <input
              type="text"
              placeholder="Search everything if you want"
            ></input>
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="searchlogo" />
          </SearchIcon>
        </SearchNav>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/home">
                <img src="/images/nav-Home.svg" alt="nav-Home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/home">
                <img src="/images/nav-network.svg" alt="nav-network" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/home">
                <img src="/images/nav-jobs.svg" alt="nav-Jobs" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/home">
                <img src="/images/nav-messaging.svg" alt="nav-messaging" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/home">
                <img src="/images/nav-notifications.svg" alt="nav-notifications" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
                <a href='/home'>
                    <img src="/images/user.svg" alt="user" />
                    <span>Me<img src="/images/down-icon.svg" alt='down-icon' /></span>
                    
                </a>
                <SignOut>
                    <a href='/'>Sign Out</a>
                </SignOut>
            </User>
            <Work>
                <a href='/home'>
                    <img src="/images/nav-work.svg" alt="work" />
                    <span>Work
                        <img src="/images/down-icon.svg" alt='down-icon'/>
                    </span>
                </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: center;
  position: fixed;
  z-index: 99;
  height: 52px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }

`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1300px;
  
`;

const Logo = styled.div``;
const SearchNav = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  margin-left: 10px;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 48px;
      line-height: 1.75;
      font-weight: 500px;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
  @media(max-width: 768px){
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  border-radius: 0 2px 2px 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active{
      span:after{
          content:'';
          transform: scaleX(1);
          border-bottom: 2px solid var(--white,#fff);
          bottom:-6px;
          left:0;
          position:absolute;
          transition: transform 0.2s ease-in-out;
          width: 100%;
          border-color: rgba(0,0,0,0.9);
          @media (max-width: 768px){
            bottom:-2px;
            left:0;
          }
      }
  }
  @media (max-width: 768px){
    margin-top:10px; 
  }
`;

const NavList = styled.li`
  align-items: center;
  display: flex;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
    
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
    position: absolute;
    top:45px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    width:100px;
    height: 48px;
    font-size:16px;
    transition-duration: 0.16s;
    text-align: center;
    display: none;


`;

const User = styled(NavList)`
    a> svg{
        width:24px;
        border-radius:50%;
    }
    a>img{
        width:24px;
        height: 24px;
        border-radius: 50%;
    }
    span{
        display: flex;
        align-items: center;
    }
    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
    @media(max-width: 768px){
        &:hover{
            ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
            top:-40px;
            left: 335px;
        }  
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.1)
`;



export default Header;
