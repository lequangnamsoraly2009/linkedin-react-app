import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state)  => state.userState.user);

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`image not found, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    dispatch(postArticleAPI(payload));
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClickClose(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                {user.displayName ? (
                  <span>{user.displayName}</span>
                ) : (
                  <span>Undefined Name</span>
                )}
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to share with everyone?"
                  autoFocus={true}
                />

                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif,image/jpeg,image/png, video/mp3,video/mp4"
                      name="image"
                      id="file-image"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <label htmlFor="file-image">Select image</label>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="" />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <VideoInput>
                      <input
                        type="text"
                        placeholder="Please paste your link video ?"
                        value={videoLink}
                        style={{ width: "100%" }}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </VideoInput>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img
                    src="/images/image-icon.svg"
                    htmlFor="file-image"
                    alt=""
                  />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src="/images/youtube-icon.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <PostButton
                disabled={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  color: black;
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: transparent;
  border-radius: 5px;
  &:hover {
    background: #afd0de;
  }
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 15px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  color: white;
  padding: 0 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#004182")};
  }
`;

const Editor = styled.div`
  padding: 0 20px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: 1px solid #004182;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    word-spacing: normal;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin: 0 10px;
  }
`;

const VideoInput = styled.div`
  margin-left: 15px;
  input {
    height: 25px;
    margin: 5px 0;
  }
`;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   postArticle: (payload) => dispatch(postArticleAPI(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PostModal);

export default PostModal;
