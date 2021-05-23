import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a href="/home">
              <Avatar  />
            </a>
            <div>
              <span>Ba Que Vạn Tuế</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a href="/home">
              <Avatar />
            </a>
            <div>
              <span>Ta Có Súng Đó</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
        <a href="/home">
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </a>
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/anh-bia-dep-12-696x392.jpg?fit=700%2C20000&quality=95&ssl=1");
  background-size: contain;
  background-position: center;
  /* background-repeat: no-repeat; */
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 50%;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  &>a{
      text-decoration: none;
      color: #000;
      &:hover{
      color: #0e65c2;
    }

    img{
        vertical-align: middle;
    }
  }

  
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside;