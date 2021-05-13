import styled from "styled-components";

const MainSide = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <TagItem>
          <Photo>
            <button>
              <img src="/images/image-icon.svg" alt="" />
              <span>Photo</span>
            </button>
          </Photo>
          <Video>
            <button>
              <img src="/images/video-icon.svg" alt="" />
              <span>Video</span>
            </button>
          </Video>
          <Event>
            <button>
              <img src="/images/event-icon.svg" alt="" />
              <span>Events</span>
            </button>
          </Event>
          <Article>
            <button>
              <img src="/images/article-icon.svg" alt="" />
              <span>Article</span>
            </button>
          </Article>
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
      width: 15px;
      height: 15px;
    }
    span {
      font-size: 12px;
    }
    &:hover{
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 10px;
      box-shadow: 0 0 5px 5px rgba(0,0,0,0.12);
    }
  }
`;
const Video = styled.div`
  width: 50px;
  height: 50px;
  button {
    border: none;
    img {
      width: 15px;
      height: 15px;
    }
    span {
      font-size: 12px;
    }
    &:hover{
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 10px;
      box-shadow: 0 0 5px 5px rgba(0,0,0,0.12);
    }
  }
`;
const Event = styled.div`
  width: 50px;
  height: 50px;
  button {
    border: none;

    img {
      width: 15px;
      height: 15px;
    }
    span {
      font-size: 12px;
    }
    &:hover{
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 10px;
      box-shadow: 0 0 5px 5px rgba(0,0,0,0.12);
    }

  }
`;
const Article = styled.div`
  width: 50px;
  height: 50px;
  button {
    border: none;
    img {
      width: 15px;
      height: 15px;
    }
    span {
      font-size: 12px;
    }
    &:hover{
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 10px;
      box-shadow: 0 0 5px 5px rgba(0,0,0,0.12);
    }
  }
`;

export default MainSide;
