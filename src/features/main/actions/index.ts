import * as TYPES from './types';
import * as MESSAGES from './messages';

// Types
import type {
  AppDataState,
  Goal,
  Sphere
} from 'features/main/reducers/appDataReducer';
import type { UserDataState } from 'features/main/reducers/userDataReducer';

// App data types
type SetAppData = {
  type: TYPES.SET_APP_DATA;
  data: AppDataState;
};

type AddGoalPayload = {
  sphereId: string;
  goal: Goal;
};

type AddGoal = {
  type: TYPES.ADD_GOAL;
  payload: AddGoalPayload;
};

type RemoveGoalPayload = {
  goalId: string;
  sphere: Sphere;
};

type RemoveGoal = {
  type: TYPES.REMOVE_GOAL;
  payload: RemoveGoalPayload;
};

type EditGoalPayload = {
  goalId: string;
  goalValue: string;
  sphere: Sphere;
};

type EditGoal = {
  type: TYPES.EDIT_GOAL;
  payload: EditGoalPayload;
};

type AppDataActions = SetAppData | AddGoal | RemoveGoal | EditGoal;

// User data types
type SetUserData = {
  type: TYPES.SET_USER_DATA;
  userData: UserDataState;
};

type UserDataActions = SetUserData;

// App data actions
const setAppData = (data: AppDataState): SetAppData => ({
  type: MESSAGES.SET_APP_DATA,
  data
});

const addGoal = ({ sphereId, goal }: AddGoalPayload): AddGoal => ({
  type: MESSAGES.ADD_GOAL,
  payload: { sphereId, goal }
});

const removeGoal = ({ goalId, sphere }: RemoveGoalPayload): RemoveGoal => ({
  type: MESSAGES.REMOVE_GOAL,
  payload: { goalId, sphere }
});

const editGoal = ({
  goalId,
  sphere,
  goalValue
}: EditGoalPayload): EditGoal => ({
  type: MESSAGES.EDIT_GOAL,
  payload: { goalId, sphere, goalValue }
});

// User data actions
const setUserData = (userData: UserDataState): SetUserData => ({
  type: MESSAGES.SET_USER_DATA,
  userData
});

export type { AppDataActions, UserDataActions, AddGoalPayload };

export { setAppData, addGoal, removeGoal, editGoal, setUserData };
