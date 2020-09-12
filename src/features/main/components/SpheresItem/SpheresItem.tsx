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
    <div style={{ background: 'lightgray', padding: '20px' }}>
      <h3>{sphere.title}</h3>
      <AddGoal sphere={sphere} />
      {sphere.goals.map(
        (goal: Goal): ReactElement => (
          <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
        )
      )}
    </div>
  );
};

export default SpheresItem;
