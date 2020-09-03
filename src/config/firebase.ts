import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYIWhRIt--L0jP3nPebqXyrcNAIEajX6U',
  authDomain: 'forxtu-apps.firebaseapp.com',
  databaseURL: 'https://forxtu-apps.firebaseio.com',
  projectId: 'forxtu-apps',
  storageBucket: 'forxtu-apps.appspot.com',
  messagingSenderId: '505831620484',
  appId: '1:505831620484:web:f3e600b6b4f18fbbf067d1',
  measurementId: 'G-BWCCJ737C6'
};

const authConfig = firebase.initializeApp(firebaseConfig);

export const db = authConfig.firestore();

export default authConfig;
