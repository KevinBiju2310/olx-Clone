// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf-1FEt_GWJgzXABVyjUw9OYwXWVVWE-M",
  authDomain: "olx-clone-eefff.firebaseapp.com",
  projectId: "olx-clone-eefff",
  storageBucket: "olx-clone-eefff.appspot.com",
  messagingSenderId: "819749748537",
  appId: "1:819749748537:web:7355a36113f163c2b6f2e8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
