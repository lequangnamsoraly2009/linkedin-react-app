import styled from "styled-components";

const MainSide = (props) => {
  return (
    <Container>
      <ShareBox>
        What the fuck are you sharing?
        <StartPost>
          <div>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQE--jgOpOqa1g/profile-displayphoto-shrink_200_200/0/1593244373746?e=1626307200&v=beta&t=YDTnRSFEo8pH82MsU-nP1zLziGMPdITpPEliJM5qKr8" alt="" />
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
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  max-width: 100%;
`;

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
    img{
      width: 48px;
      border-radius: 50%;
      margin: 15px;
    }
    button{
      width: 80%;
      margin-top:10px;
      margin-bottom: 15px;
      border: none;
      line-height:2;
      text-align: left;
      font-size: 16px;
      font-weight: 700;
      color: rgba(0,0,0,0.9);
      &:hover{
        border-top: 1px solid rgba(0,0,0,0.12);
        border-bottom: 1px solid rgba(0,0,0,0.12);
        /* border-radius: 20px; */
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.1);
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
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.12);
    }
  }
`;

export default MainSide;
