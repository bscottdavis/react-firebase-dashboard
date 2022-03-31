import firebase from 'firebase/app';

firebase.initializeApp( {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
  appId: "1:656396312167:web:74ee2516a06bc0fbfffec2"
}

)