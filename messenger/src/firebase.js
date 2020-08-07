
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAbPWJ3BPyvzUqxnvTIo7PihhRVHeVNfZs",
    authDomain: "messenger-19949.firebaseapp.com",
    databaseURL: "https://messenger-19949.firebaseio.com",
    projectId: "messenger-19949",
    storageBucket: "messenger-19949.appspot.com",
    messagingSenderId: "49247845943",
    appId: "1:49247845943:web:90736f85dcb5cf1f8c89b2",
    measurementId: "G-HWPJQD6J1V"
  });

  const db = firebaseApp.firestore()

  export default db;