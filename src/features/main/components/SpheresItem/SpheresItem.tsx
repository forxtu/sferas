import React, { useCallback, Fragment } from 'react';

// Components
import AddGoal from 'features/main/components/AddGoal';

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
    <div>
      <h3>{sphere.title}</h3>
      <AddGoal sphere={sphere} />
      {sphere.goals.map((goal: Goal): any => (
        <Fragment key={goal.goalId}>
          <p>{goal.title}</p>
          <button onClick={(): void => removeGoal(goal.goalId)}>Remove</button>
        </Fragment>
      ))}
    </div>
  );
};

export default SpheresItem;
