// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyBv6zEONDVJSxOlkxmyUVto6eWksYVXwSU",
//     authDomain: "eshop-c2e0a.firebaseapp.com",
//     projectId: "eshop-c2e0a",
//     storageBucket: "eshop-c2e0a.appspot.com",
//     messagingSenderId: "941031253944",
//     appId: "1:941031253944:web:0bc5a43bc9fe9af86e514d",
//     measurementId: "G-5BDLQRB305"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export { db, auth };


// Old style import for Firebase < v9  
// import firebase from "firebase/app";  
// import "firebase/auth";  
// import "firebase/firestore";  

// New modular style for Firebase v9 or later  
import { initializeApp } from "firebase/app";  
import { getAuth } from "firebase/auth";  
import { getFirestore } from "firebase/firestore";  

// Your Firebase configuration  
const firebaseConfig = {  
    apiKey: "AIzaSyBotvRy3CQjzCxzjAIE9Nwu7Nw-RpsxZ54",
    authDomain: "eshop-3a31d.firebaseapp.com",
    projectId: "eshop-3a31d",
    storageBucket: "eshop-3a31d.firebasestorage.app",
    messagingSenderId: "351109598420",
    appId: "1:351109598420:web:db3599236730652e0abf41",
    measurementId: "G-GFFZDM7DDE" 
};  

// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
export default app;
// Initialize Firebase services  
const auth = getAuth(app);  
const db = getFirestore(app);  

export { auth, db };


// // Import the functions you need from the SDKs you need
// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBotvRy3CQjzCxzjAIE9Nwu7Nw-RpsxZ54",
//     authDomain: "eshop-3a31d.firebaseapp.com",
//     projectId: "eshop-3a31d",
//     storageBucket: "eshop-3a31d.firebasestorage.app",
//     messagingSenderId: "351109598420",
//     appId: "1:351109598420:web:db3599236730652e0abf41",
//   measurementId: "G-GFFZDM7DDE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();

// // const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export { db, auth };
