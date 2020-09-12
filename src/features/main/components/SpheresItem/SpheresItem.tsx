import React, { useCallback, Fragment } from 'react';

// Components
import AddGoal from 'features/main/components/AddGoal';
import EditGoal from 'features/main/components/EditGoal';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Types
import type { ReactElement } from 'react';
import type { Sphere, Goal } from 'features/main/reducers/appDataReducer';

type SpheresItem = {
  sphere: Sphere;
};

const SpheresItem = ({ sphere }: SpheresItem): ReactElement => {
  const { handleRemoveGoal } = useAppData();

  const { sphereId } = sphere;

  const removeGoal = (goalId: string): void => {
    handleRemoveGoal({ sphereId, goalId });
  };

  return (
    <div style={{ background: 'lightgray', padding: '20px' }}>
      <h3>{sphere.title}</h3>
      <AddGoal sphere={sphere} />
      {sphere.goals.map(
        (goal: Goal): ReactElement => (
          <div
            key={goal.goalId}
            style={{
              background: 'lightgreen',
              padding: '20px',
              marginTop: '10px'
            }}
          >
            <p>{goal.title}</p>
            <button onClick={(): void => removeGoal(goal.goalId)}>
              Remove
            </button>
            <EditGoal goal={goal} sphere={sphere} />
          </div>
        )
      )}
    </div>
  );
};

export default SpheresItem;
