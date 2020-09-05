import { useSelector } from 'react-redux';

// Redux
import { getAppDataSelector } from 'features/main/reducers/appDataReducer';

// Types
import type { AppDataState } from 'features/main/reducers/appDataReducer';

type UseAppData = {
  appData: AppDataState;
};

const useAppData = (): UseAppData => {
  const appData = useSelector(getAppDataSelector);

  return { appData };
};

export default useAppData;
