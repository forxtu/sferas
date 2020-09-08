// Utils
import { db } from 'config/firebase';

// Types
import type { FireStoreCollection, FireStoreDoc } from 'config/firebase';

const getCollection = (collectionName: string): FireStoreCollection =>
  db.collection(collectionName);

const getUsersCollection = (): FireStoreCollection => db.collection('users');

const getParticularUser = (docId: string): FireStoreDoc =>
  getUsersCollection().doc(docId);

export { getCollection, getUsersCollection, getParticularUser };
