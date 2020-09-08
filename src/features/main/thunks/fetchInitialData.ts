// Redux
import { setAppData, setUserData } from 'features/main/actions';

// Utils
import { db } from 'config/firebase';

// Types
import type { Dispatch } from 'redux';
import type { FireStoreDoc } from 'config/firebase';

type FetchInitialData = (dispatch: Dispatch) => Promise<void>;

const fetchInitialData = (userId: string): FetchInitialData => async (
  dispatch: Dispatch
): Promise<void> => {
  const usersCollection = db.collection('users');

  const usersSnapshot = await usersCollection.get();
  let docData: FireStoreDoc = {};

  usersSnapshot.forEach((doc: FireStoreDoc): void => {
    if (doc.data().userData.userId === userId) {
      docData = {
        ...doc.data(),
        userData: {
          ...doc.data().userData,
          docId: doc.id
        }
      };
    }
  });

  const { appData, userData } = docData!;

  dispatch(setAppData(appData));
  dispatch(setUserData(userData));
};

export default fetchInitialData;
