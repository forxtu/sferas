import { useCallback } from 'react';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import {
  selectAppData,
  selectSphereById,
  selectSphereByTitle
} from 'features/main/reducers/appDataReducer';
import { addGoal, removeGoal, editGoal } from 'features/main/actions';

// Hooks
import useUserData from 'features/main/hooks/useUserData';

// Utils
import { replaceSphereInSpheres } from 'utils/helpers';

// Types
import type {
  AppDataState,
  Sphere,
  Goal
} from 'features/main/reducers/appDataReducer';
import type { AddGoalPayload } from 'features/main/actions';

type RemoveGoalArgs = {
  sphereId: string;
  goalId: string;
};

type EditGoalArgs = {
  sphereId: string;
  goalId: string;
  goalValue: string;
};

type UseAppData = {
  appData: AppDataState;
  spheres: Sphere[];
  handleAddGoal: ({ sphereId, goal }: AddGoalPayload) => void;
  handleRemoveGoal: ({ sphereId, goalId }: RemoveGoalArgs) => void;
  handleEditGoal: ({ sphereId, goalId, goalValue }: EditGoalArgs) => void;
  getSphereById: (sphereId: string) => Sphere | undefined;
  getSphereByTitle: (sphereTitle: string) => Sphere | undefined;
};

const useAppData = (): UseAppData => {
  const dispatch = useDispatch();
  const { fireStoreUser } = useUserData();
  const appData = useSelector(selectAppData);
  const getSphereById = useSelector(selectSphereById);
  const getSphereByTitle = useSelector(selectSphereByTitle);

  const { spheres } = appData;

  const handleAddGoal = ({ sphereId, goal }: AddGoalPayload): void => {
    dispatch(addGoal({ sphereId, goal }));

    fireStoreUser.update({
      'appData.spheres': spheres
    });
  };

  const handleRemoveGoal = ({ sphereId, goalId }: RemoveGoalArgs): void => {
    // Get particular sphere by ID
    const sphere = getSphereById(sphereId)!;

    dispatch(removeGoal({ goalId, sphere }));

    const updatedGoals = sphere.goals.filter(
      (goal: Goal): boolean => goal.goalId !== goalId
    );

    fireStoreUser.update({
      'appData.spheres': replaceSphereInSpheres(spheres, {
        ...sphere,
        goals: updatedGoals
      })
    });
  };

  const handleEditGoal = ({
    sphereId,
    goalId,
    goalValue
  }: EditGoalArgs): void => {
    const sphere = getSphereById(sphereId)!;

    dispatch(editGoal({ sphere, goalId, goalValue }));

    fireStoreUser.update({
      'appData.spheres': spheres
    });
  };

  return {
    appData,
    spheres,
    getSphereById,
    getSphereByTitle,
    handleAddGoal,
    handleRemoveGoal,
    handleEditGoal
  };
};

export default useAppData;
