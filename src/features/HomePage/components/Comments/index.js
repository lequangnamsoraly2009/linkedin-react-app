import { useState } from "react";
import styled from "styled-components";
import firebase from "firebase";
import ListComment from "../ListComment.js";
import { useDispatch } from "react-redux";
import { postCommentsAPI } from "actions/index.js";

const Comments = (props) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();  
 
  const postComment = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      user: props.user,
      description: commentText,
      timestamp: firebase.firestore.Timestamp.now(),
      article: props.article,
    };
    dispatch(postCommentsAPI(payload));
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
      <ListComment article={props.article} comments={props.comments}/>
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

export default Comments;

// ?? sao k dùng useDispatch vs useSelector 

