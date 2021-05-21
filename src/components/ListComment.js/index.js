import styled from "styled-components";

const ListComment = ({ comments, article }) => {
  return (
    <>
      {comments[article.uid]?.length &&
        comments[article.uid].map((comment, index) => {
          return (
            <MainComment key={index}>
              <HeaderMainComment>
                <div>
                  <img src={comment.actor.image} alt="User Of Comment" />
                  <div>
                    <span>{comment.actor.title}</span>
                    <span>{comment.actor.description}</span>
                  </div>
                </div>
                <span>{comment.actor.date.toDate().toLocaleDateString()}</span>
              </HeaderMainComment>
              <ContentMainComment>
                <span>{comment.description}</span>
              </ContentMainComment>
            </MainComment>
          );
        })}
    </>
  );
};

const MainComment = styled.div`
  width: 100%;
  height: auto;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px 15px 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
      text-align: start;
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

const ContentMainComment = styled.div`
  text-align: start;
  margin: 5px 15px;
  margin-left: 65px;
`;

export default ListComment;
