import { useState } from 'react';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Types
import type { Goal } from 'features/main/reducers/appDataReducer';

type Args = {
  goal: Goal;
  sphereId: string;
};

type EditableGoal = {
  goalTitle: string;
  handleSetGoalTitle: (title: string) => void;
};

const useEditableGoal = ({ goal, sphereId }: Args): EditableGoal => {
  const { handleEditGoal } = useAppData();

  const [goalTitle, setGoalTitle] = useState(goal.title);

  const handleSetGoalTitle = (title: string): void => {
    setGoalTitle(title);

    if (goalTitle !== title) {
      handleEditGoal({ sphereId, goalId: goal.goalId, goalValue: title });
    }
  };

  return {
    goalTitle,
    handleSetGoalTitle
  };
};

export default useEditableGoal;
