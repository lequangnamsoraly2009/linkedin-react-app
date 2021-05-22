import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCommentAPI } from "../../actions";


const ListComment = ({ comments, article }) => {

  const dispatch = useDispatch();

  const handleClickDeleteArticle = (e,comment) => {
    e.preventDefault();
    if(e.target !== e.currentTarget)return;
    else{
      const payload = {
        uid_comment: comment.uid,
        uid_article: comment.__uid,
      }
      dispatch(deleteCommentAPI(payload));
    }
  }

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
                <WrapLinhTinh>
                  <span>
                    {comment.actor.date.toDate().toLocaleDateString()}
                  </span>
                  <OptionInfoComment>
                    <img src="/images/ellipsis-icon.svg" alt="" />
                    <OptionsComment>
                      <a href="/" onClick={(e) =>handleClickDeleteArticle(e,comment)}>Delete</a>
                      <a href="/">Edit</a>
                    </OptionsComment>
                  </OptionInfoComment>
                </WrapLinhTinh>
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

const WrapLinhTinh = styled.div`
  display: flex;
  flex-direction: row;
  span {
    text-align: start;
    margin: auto;
  }
`;

const ContentMainComment = styled.div`
  text-align: start;
  margin: 5px 15px;
  margin-left: 65px;
`;

const OptionsComment = styled.div`
  position: absolute;
  top: 35px;
  right: 15px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 65px;
  height: auto;
  max-height: 200px;
  font-size: 16px;
  transition-duration: 0.16s;
  text-align: right;
  display: none !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
    color: #70b5f9;
  }
`;

const OptionInfoComment = styled.div`
  position: relative;

  img {
    height: 40px;
    width: 20px;
    margin: 3px 30px;
    vertical-align: middle;
  }
  &:hover {
    ${OptionsComment} {
      display: flex !important;
      flex-direction: column;
      line-height: 1.5;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 20px;
      margin: 2px 30px;
    }
  }
`;

export default ListComment;
