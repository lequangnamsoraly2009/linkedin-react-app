import styled from "styled-components";

const Comments = (props) => {
  return (
    <>
      <HeaderComment>
        <img src="/images/user.svg" alt="User" />
        <CommentHere>
          <input type="text" placeholder="Add a comment..."></input>
        </CommentHere>
      </HeaderComment>
      <MainComment>
        <HeaderMainComment>
          <div>
            <img src="/images/user.svg" alt="User" />
            <div>
              <span>Name</span>
              <span>Email</span>
            </div>
          </div>
          <span>30/12/2021</span>
        </HeaderMainComment>
      </MainComment>
    </>
  );
};

const HeaderComment = styled.div`
  display: flex;
  flex-direction: start;
  width: 100%;

  height: 50px;
  margin: 0 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 0;

  img {
    border-radius: 50%;
    margin-left: 5px;
  }
`;

const CommentHere = styled.div`
  margin-top: 3px;
  vertical-align: center;

  input {
    font-size: 16px;
    width: 250%;
    margin: 0 10px;
    height: 40px;
    border-radius: 15px;
    padding-left: 10px;
    border: 0.5px solid rgba(0, 0, 0, 1);
    @media (max-width: 768px) {
      width: 280%;
      margin: 0 10px;
    }
    &:focus {
      outline: none;
      border: 1px solid rgb(14, 101, 194);
    }
    &:hover {
      border: 1px solid rgb(0, 0, 0);
    }
  }
`;

const MainComment = styled.div`
  width: 100%;
  height: auto;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px 15px 10px 15px;
`;

const HeaderMainComment = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  div {
      display: flex;
      flex-direction: row;
    img {
      border-radius: 50%;
      margin-left: 5px;
      height: 45px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
        margin-left: 15px;
        margin-bottom: 5px;
      span:first-child {
        font-size: 16px;
      }
      span:last-child {
        font-size: 12px;
      }
    }
  }
  & > span {
      margin-right: 18px;
      margin-top: 15px;
      align-items: center;
      align-self: auto;
      font-size: 14px;
  }
`;

export default Comments;
