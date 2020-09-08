import { useCallback } from 'react';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import {
  selectAppData,
  selectSphereById
} from 'features/main/reducers/appDataReducer';
import { addGoal, removeGoal } from 'features/main/actions';

// Hooks
import useUserData from 'features/main/hooks/useUserData';

// Utils
import { getParticularUser } from 'utils/firestore';
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

type UseAppData = {
  appData: AppDataState;
  spheres: Sphere[];
  handleAddGoal: ({ sphereId, goal }: AddGoalPayload) => void;
  handleRemoveGoal: ({ sphereId, goalId }: RemoveGoalArgs) => void;
};

const useAppData = (): UseAppData => {
  const dispatch = useDispatch();
  const { userData } = useUserData();
  const appData = useSelector(selectAppData);
  const getSphere = useSelector(selectSphereById);

  const { spheres } = appData;

  const handleAddGoal = ({ sphereId, goal }: AddGoalPayload): void => {
    const user = getParticularUser(userData.docId);

    dispatch(addGoal({ sphereId, goal }));

    user.update({
      'appData.spheres': spheres
    });
  };

  const handleRemoveGoal = ({ sphereId, goalId }: RemoveGoalArgs): void => {
    const user = getParticularUser(userData.docId);
    // Get particular sphere by ID
    const sphere = getSphere(sphereId)!;

    dispatch(removeGoal({ goalId, sphere }));

    const updatedGoals = sphere.goals.filter(
      (goal: Goal): boolean => goal.goalId !== goalId
    );

    user.update({
      'appData.spheres': replaceSphereInSpheres(spheres, {
        ...sphere,
        goals: updatedGoals
      })
    });
  };

  return { appData, spheres, handleAddGoal, handleRemoveGoal };
};

export default useAppData;
