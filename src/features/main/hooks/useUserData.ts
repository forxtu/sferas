import { useSelector } from 'react-redux';

// Redux
import { getUserDataSelector } from 'features/main/reducers/userDataReducer';

// Utils
import { getParticularUser } from 'utils/firestore';

// Types
import type { UserDataState } from 'features/main/reducers/userDataReducer';
import { FireStoreDoc } from 'config/firebase';

type UseUserData = {
  userData: UserDataState;
  fireStoreUser: any;
  // fireStoreUser: FireStoreDoc;
};

const useUserData = (): UseUserData => {
  const userData = useSelector(getUserDataSelector);
  const fireStoreUser =
    userData.userId !== '' && getParticularUser(userData.docId);

  return { userData, fireStoreUser };
};

export default useUserData;
