import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Types
import type { ChangeEvent } from 'react';
import type {
  Sphere,
  Goal,
  GoalType
} from 'features/main/reducers/appDataReducer';

type AddGoal = {
  sphere: Sphere;
};

const AddGoal = ({ sphere: { sphereId } }: AddGoal) => {
  const { handleAddGoal } = useAppData();
  const [goal, setGoal] = useState<Goal>({
    title: '',
    type: 'global',
    goalId: ''
  });

  const handleSetGoal = (e: ChangeEvent): void => {
    e.preventDefault();

    setGoal({
      ...goal,
      title: (e.target as HTMLInputElement).value
    });
  };

  const handleSetGoalType = (e: ChangeEvent): void => {
    e.preventDefault();

    setGoal({
      ...goal,
      type: (e.target as HTMLInputElement).value as GoalType
    });
  };

  const addGoal = useCallback((): void => {
    handleAddGoal({ sphereId, goal });
  }, [goal.type, goal.title]);

  return (
    <div>
      <div>
        <input
          value={goal.title}
          onChange={handleSetGoal}
          type="text"
          name="goal"
          placeholder="Set your goal"
        />
        <select
          value={goal.type}
          onChange={handleSetGoalType}
          name="goaltype"
          placeholder="Set your goal type"
        >
          <option value="global" defaultChecked>
            Global
          </option>
          <option value="week">Week</option>
        </select>
      </div>
      <button type="button" onClick={addGoal}>
        Add goal
      </button>
    </div>
  );
};

export default AddGoal;
