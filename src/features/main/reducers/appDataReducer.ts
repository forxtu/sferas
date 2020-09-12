import { createSelector } from 'reselect';
import { v4 as uuidv4 } from 'uuid';

// Utils
import * as MESSAGES from 'features/main/actions/messages';
import { replaceSphereInSpheres } from 'utils/helpers';

// Types
import type { AppDataActions } from 'features/main/actions';
import type { RootState } from 'store/configureStore';

type GoalType = 'global' | 'week';

type Goal = {
  title: string;
  type: GoalType;
  goalId: string;
};

type Sphere = {
  title: string;
  sphereId: string;
  goals: Goal[];
};

type AppDataState = {
  spheres: Sphere[];
};

const initialState: AppDataState = {
  spheres: [
    {
      title: 'Психическое здоровье',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Физическое здоровье',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Внешность',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Личная жизнь',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Отношения',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Работа',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Деньги',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Обучение и хобби',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Развлечения',
      sphereId: uuidv4(),
      goals: []
    },
    {
      title: 'Быт',
      sphereId: uuidv4(),
      goals: []
    }
  ]
};

const appDataReducer = (
  state: AppDataState = initialState,
  action: any
): AppDataState => {
  switch (action.type) {
    case MESSAGES.SET_APP_DATA:
      return {
        ...state,
        ...action.data
      };
    case MESSAGES.ADD_GOAL: {
      const { goal, sphereId } = action.payload;

      const sphere = state.spheres.find(
        (sphereItem: Sphere): boolean => sphereItem.sphereId === sphereId
      );

      const updatedGoal = {
        ...goal,
        goalId: uuidv4()
      };

      sphere?.goals.push(updatedGoal);

      return {
        ...state
      };
    }
    case MESSAGES.REMOVE_GOAL: {
      const { goalId, sphere } = action.payload;

      const updatedGoals = sphere.goals.filter(
        (goal: Goal): boolean => goal.goalId !== goalId
      );

      return {
        ...state,
        spheres: replaceSphereInSpheres(state.spheres, {
          ...sphere,
          goals: updatedGoals
        })
      };
    }
    case MESSAGES.EDIT_GOAL: {
      const { goalId, sphere, goalValue } = action.payload;

      const goal = sphere.goals.find(
        (goal: Goal): boolean => goal.goalId === goalId
      );

      goal.title = goalValue;

      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

// Selectors
const selectAppDataReducer = (state: RootState): AppDataState =>
  state.appDataReducer;

const selectSpheres = (state: RootState): Sphere[] =>
  state.appDataReducer.spheres;

const selectAppData = createSelector(
  selectAppDataReducer,
  (appDataReducer: AppDataState): AppDataState => appDataReducer
);

const selectSphereById = createSelector(selectSpheres, (spheres: Sphere[]): ((
  sphereId: string
) => Sphere | undefined) => (sphereId: string): Sphere | undefined =>
  spheres.find(
    (sphereItem: Sphere): boolean => sphereItem.sphereId === sphereId
  )
);

export type { AppDataState, Sphere, Goal, GoalType };

export { initialState, selectAppData, selectSphereById };

export default appDataReducer;
