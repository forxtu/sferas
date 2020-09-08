import firebase from 'firebase';

// Types
import type { User, auth } from 'firebase';

type UserCredential = auth.UserCredential;
type OptionalUser = User | null;
type FireStoreDoc = firebase.firestore.DocumentData;
type FireStoreCollection = firebase.firestore.CollectionReference<
  firebase.firestore.DocumentData
>;

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

const db = authConfig.firestore();

export type {
  OptionalUser,
  User,
  UserCredential,
  FireStoreDoc,
  FireStoreCollection
};

export { db };

export default authConfig;
