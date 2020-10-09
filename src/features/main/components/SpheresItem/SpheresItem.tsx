import React from 'react';

// Components
import AddGoal from 'features/main/components/AddGoal';
import GoalItem from 'features/main/components/GoalItem';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Types
import type { ReactElement } from 'react';
import type { Sphere, Goal } from 'features/main/reducers/appDataReducer';

type SpheresItem = {
  sphere: Sphere;
};

const SpheresItem = ({ sphere }: SpheresItem): ReactElement => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>{sphere.title}</h3>
      {sphere.goals.map(
        (goal: Goal): ReactElement => (
          <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
        )
      )}
    </div>
  );
};

export default SpheresItem;
