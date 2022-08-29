import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO-ErTfBJEi0n3mK0q2NiKtXkORR0BTOg",
  authDomain: "snapchat-clone-yt-57083.firebaseapp.com",
  projectId: "snapchat-clone-yt-57083",
  storageBucket: "snapchat-clone-yt-57083.appspot.com",
  messagingSenderId: "987900954371",
  appId: "1:987900954371:web:a19eb7e625cd08b825cb36",
};

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
