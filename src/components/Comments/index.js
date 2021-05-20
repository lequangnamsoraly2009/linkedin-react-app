import { useEffect, useState } from "react";
import styled from "styled-components";
import { postCommentsAPI } from "../../actions";
import firebase from "firebase";
import {getCommentsAPI} from "../../actions";
import { connect } from "react-redux";
import db from "../../firebase";

const Comments = (props) => {
  const [commentText, setCommentText] = useState("");

  console.log(props);

  useEffect(() => {
    props.getComments();
  }, []);

  const postComment = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      // id: firebase.firestore.collection("articles").doc(),
      user: props.user,
      description: commentText,
      timestamp: firebase.firestore.Timestamp.now(),
      article: props.article,
    };
    // console.log(payload);
    props.postComment(payload);
    props.getComments(payload);
    reset(e);
  };

  const reset = (e) => {
    setCommentText("");
    // props.handleClickEnter(e);
  };
  return (
    <>
      <HeaderComment>
        {props.user.photoURL ? (
          <img src={props.user.photoURL} alt="" />
        ) : (
          <img src="/images/user.svg" alt="" />
        )}
        <CommentHere>
          <form>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
            ></input>
            <input
              type="submit"
              tabIndex="-1"
              onClick={(e) => postComment(e)}
            />
          </form>
        </CommentHere>
      </HeaderComment>
      <>
      {props.comments.length>0&& props.comments.map((comment,key)=>(
        <MainComment key={key}>
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
      ))}
      </>
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
  form {
    input:first-child {
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
    input:last-child {
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
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

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    // article: state.articleState.article,
    comments: state.commentState.comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (payload) => dispatch(postCommentsAPI(payload)),
  getComments: () => dispatch(getCommentsAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);