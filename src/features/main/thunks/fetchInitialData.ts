// Redux
import { setAppData, setUserData } from 'features/main/actions';

// Utils
import { db } from 'config/firebase';

// Types
import type { Dispatch } from 'redux';
import type { AppDataState } from 'features/main/reducers/appDataReducer';
import type { UserDataState } from 'features/main/reducers/userDataReducer';

const fetchInitialData = (userId: string): any => {
  return (dispatch: Dispatch): any => {
    db.collection('users')
      .where('userData.userId', '==', userId)
      .get()
      .then((snapshot) => {
        const appData: AppDataState = snapshot.docs[0].data().appData;
        const userData: UserDataState = snapshot.docs[0].data().userData;

        dispatch(setAppData(appData));
        dispatch(setUserData(userData));
      });
  };
};

export default fetchInitialData;
