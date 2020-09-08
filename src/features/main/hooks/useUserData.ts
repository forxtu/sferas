// import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { getUserDataSelector } from 'features/main/reducers/userDataReducer';
// import { setUserData } from 'features/userData/actions';

// Types
import type { UserDataState } from 'features/main/reducers/userDataReducer';

type UseUserData = {
  userData: UserDataState;
  // handleSetUserData: (data: UserDataState) => void;
};

const useUserData = (): UseUserData => {
  // const dispatch = useDispatch();
  const userData = useSelector(getUserDataSelector);

  // const handleSetUserData = useCallback(
  //   (data: UserDataState): void => {
  //     dispatch(setUserData(data));
  //   },
  //   [dispatch]
  // );

  return { userData };
};

export default useUserData;
