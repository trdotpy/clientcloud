import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtaEbS3ULzkJVNMTdiAdUzF2XoXOz6Bcc",
  authDomain: "clientcloud-32b74.firebaseapp.com",
  projectId: "clientcloud-32b74",
  storageBucket: "clientcloud-32b74.appspot.com",
  messagingSenderId: "480619362325",
  appId: "1:480619362325:web:bc4e90db6dfcad9f78b61c",
  measurementId: "G-YBFXKX96CB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
