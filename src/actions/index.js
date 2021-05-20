import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import {
  SET_USER,
  SET_LOADING_STATUS,
  GET_ARTICLES,
  GET_COMMENTS,
} from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export const getComments = (payload) => ({
  type: GET_COMMENTS,
  payload: payload,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((err) => alert(err.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) dispatch(setUser(user));
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => {
          console.log(error.code);
        },
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            uid: Math.ceil(Math.random() * 100000),
            video: "",
            sharedImg: downloadURL,
            likes: Math.ceil(Math.random() * 1000),
            comments: Math.ceil(Math.random() * 1000),
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video !== "") {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        uid: Math.ceil(Math.random() * 100000),
        video: payload.video,
        likes: Math.ceil(Math.random() * 1000),
        comments: Math.ceil(Math.random() * 1000),
        sharedImg: "",
        description: payload.description,
      });
      dispatch(setLoading(false));
    } else {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        uid: Math.ceil(Math.random() * 100000),
        video: "",
        likes: Math.ceil(Math.random() * 1000),
        comments: Math.ceil(Math.random() * 1000),
        sharedImg: "",
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticleAPI() {
  return (dispatch) => {
    let payload;
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        // console.log(payload);
        dispatch(getArticles(payload));
      });
  };
}

export function postCommentsAPI(payload) {
  return (dispatch) => {
    // console.log(payload);
    const articlesRefFind = db
      .collection("articles")
      .where("uid", "==", `${payload.article.uid}`);
    const articlesRef = db.collection("articles");
    articlesRefFind.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        articlesRef
          .doc(doc.id)
          .collection("comments")
          .add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            uid: Math.ceil(Math.random() * 100000),
            description: payload.description,
          });
        // dispatch(getComments(payload));
      });
    });
  };
}

// export function getCommentsAPI(payload) {
//   return (dispatch) => {
//     let payloadFake;
//     // console.log(payload)
//     const articlesRefFind = db
//       .collection("articles")
//       .where("uid", "==", `${payload.article.uid}`);
//     const articlesRef = db.collection("articles");
//     articlesRefFind.get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         articlesRef
//           .doc(doc.id)
//           .collection("comments").orderBy("actor.date", "desc")
//           .onSnapshot((snapshot) => {
//             payloadFake = snapshot.docs.map((doc) => doc.data());
//             // console.log(payloadFake);
//             dispatch(getComments(payloadFake));
//           });
//       });
//     });
//   };
// }
export function getCommentsAPI() {
  return (dispatch) => {
    let payloadFake;
    // console.log(payloadFake)
    const articlesRef = db.collection("articles");
    db.collection("articles")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          articlesRef
            .doc(doc.id)
            .collection("comments")
            .orderBy("actor.date", "desc")
            .onSnapshot((snapshot) => {
              payloadFake = snapshot.docs.map((doc) => doc.data());
              console.log(payloadFake);
              dispatch(getComments(payloadFake));
            });
        });
      });
  };
}
