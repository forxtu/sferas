import React, { useState } from 'react';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Types
import type { ReactElement, ChangeEvent } from 'react';
import type { Sphere, Goal } from 'features/main/reducers/appDataReducer';

type Props = {
  goal: Goal;
  sphere: Sphere;
};

const EditGoal = ({ goal, sphere: { sphereId } }: Props): ReactElement => {
  const { handleEditGoal } = useAppData();

  const [goalValue, setGoalValue] = useState('');

  const editGoal = (goalId: string): void => {
    handleEditGoal({ sphereId, goalId, goalValue });
    setGoalValue('');
  };

  const handleSetGoalValue = (e: ChangeEvent): void => {
    e.preventDefault();

    setGoalValue((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <input
        value={goalValue}
        onChange={handleSetGoalValue}
        type="text"
        name={goal.goalId}
        placeholder="Edit your goal"
      />
      <button onClick={(): void => editGoal(goal.goalId)}>Edit</button>
    </div>
  );
};

export default EditGoal;
