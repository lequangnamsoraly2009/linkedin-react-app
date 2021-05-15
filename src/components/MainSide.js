import { connect } from "react-redux";
import styled from "styled-components";

const MainSide = (props) => {
  return (
    <Container>
      <ShareBox>
        What the fuck are you sharing?
        <StartPost>
          <div>
            {props.user ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <button>Start a post</button>
          </div>
        </StartPost>
        <TagItem>
          <Photo>
            <button>
              <img src="/images/image-icon.svg" alt="" />
              <span>Photo</span>
            </button>
          </Photo>
          <Photo>
            <button>
              <img src="/images/video-icon.svg" alt="" />
              <span>Video</span>
            </button>
          </Photo>
          <Photo>
            <button>
              <img src="/images/event-icon.svg" alt="" />
              <span>Events</span>
            </button>
          </Photo>
          <Photo>
            <button>
              <img src="/images/article-icon.svg" alt="" />
              <span>Article</span>
            </button>
          </Photo>
        </TagItem>
      </ShareBox>
      <div>
        <Article>
          Article
          <HeaderInfo>
            <InfoUser>
              {props.user ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}

              <InfoTitle>
                {props.user ? <span>{props.user.displayName}</span> : <span>Name User</span>}
                
                <span>Company Name</span>
                <span>
                  7h
                  <img src="/images/global-icon.svg" alt="" />
                </span>
              </InfoTitle>
            </InfoUser>
            <img src="/images/ellipsis-icon.svg" alt="" />
          </HeaderInfo>
          <TextArticle>Today I feel so good ? </TextArticle>
          <ImgShared>
            <a href="/">
              <img
                src="https://dean1665.vn/uploads/du-an/2020_05/flat-farm-landscape_23-2148180089.jpg"
                alt="img"
              />
              <img
                src="https://frenchmoments.eu/wp-content/uploads/2020/03/Lorraine-Sion-Countryside-LR-%C2%A9-French-Moments.jpg"
                alt=""
              />
            </a>
          </ImgShared>
          <ActionCount>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r"
                  alt=""
                />
                <span>104</span>
              </button>
            </li>
            <li>
              <a href="/">69 Comments</a>
            </li>
          </ActionCount>
          <ActionArticle>
            <Action>
              <button>
                <img src="/images/like-black-icon.svg" alt="" />
                <span>Like</span>
              </button>
            </Action>
            <Action>
              <button>
                <img src="/images/message-icon.svg" alt="" />
                <span>Comment</span>
              </button>
            </Action>
            <Action>
              <button>
                <img src="/images/share-icon.svg" alt="" />
                <span>Share</span>
              </button>
            </Action>
          </ActionArticle>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  max-width: 100%;
`;

// Khung box dựng sẵn - tương tự components bên ngoài được import vào - ở đây thì copy vào
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
`;

const StartPost = styled.div`
  width: 100%;
  background: transparent;
  & > div {
    display: flex;
    flex-direction: row;
    img {
      width: 48px;
      border-radius: 50%;
      margin: 15px;
    }
    button {
      width: 80%;
      margin-top: 10px;
      margin-bottom: 15px;
      border: 1px solid rgba(0, 0, 0, 0.01);
      border-radius: 20px;
      line-height: 2;
      text-align: left;
      font-size: 16px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.9);
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.12);
        /* border-bottom: 1px solid rgba(0,0,0,0.12); */
        border-radius: 20px;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const TagItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;
const Photo = styled.div`
  width: 50px;
  height: 50px;

  button {
    border: none;
    img {
      width: 40px;
      height: 20px;
    }
    span {
      font-size: 12px;
      color: #70b5f9;
    }
    &:hover {
      /* border: 1px solid rgba(0, 0, 0, 0.15); */
      background: rgba(0, 0, 0, 0.09);
      border-radius: 5px;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.09);
    }
  }
`;

const Article = styled(CommonCard)``;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 30px;
    margin: 15px;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    img {
      width: 20px;
      margin: 15px;
    }
  }
`;

const InfoUser = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 15px;
  }
`;

const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  span {
    text-align: left;
    &:first-child {
      font-size: 16px;
      font-weight: 600;
    }

    &:nth-child(n + 2) {
      font-size: 12px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
    }
    img {
      border: none;
      margin: 0;
      width: 16px;
      height: auto;
      margin-left: 5px;
    }
  }
`;

const TextArticle = styled.div`
  text-align: left;
  margin: 5px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ImgShared = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  img {
    height: 400px;
  }
`;

const ActionCount = styled.div`
  position: relative;
  list-style-type: none;
  display: flex;
  margin-left: 25px;
  margin-bottom: 10px;
  button {
    transition: transform 0.1s ease-in-out;
    border: none;
    background: transparent;
    margin: 0 30px 0 0;
    img {
      vertical-align: bottom;
      max-width: 20px;
    }
    &:hover {
      background: white;
      transform: scale(1.5);
      position: absolute;
      display: block;
      top: -5px;
      left: 12px;
      margin-right: 150px;
      img {
        max-width: 30px;
      }
    }
  }
  a {
    display: block;
    text-decoration: none;
    color: black;
  }
`;

const ActionArticle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 50%;
  margin-bottom: 10px;
`;

const Action = styled.div`
  button {
    border: none;
    background: transparent;
    width: auto;
    height: 35px;
    img {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
    }
    span {
      margin: auto;
      margin-left: 5px;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

const mapStateToProps = (state) => ({
  user : state.userState.user,
});

const mapDispatchToProps = (dispatch)=>{
  return {};
}



export default connect(mapStateToProps, mapDispatchToProps)(MainSide);