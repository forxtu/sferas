import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

// Components
import MainLayout from 'components/layouts/MainLayout';
import AddGoal from 'features/main/components/AddGoal';
import GoalItem from 'features/main/components/GoalItem';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Utils
import { RouteUrl } from 'routes';

// Types
import type { ReactElement } from 'react';

type Params = {
  sphereId: string;
};

const SpherePage = (): any => {
  const { state } = useLocation<Params>();
  const { getSphereById } = useAppData();

  if (!state) {
    return <Redirect to={RouteUrl.HomePagePath} />;
  }

  const { sphereId } = state;

  const sphere = getSphereById(sphereId)!;

  if (!sphere) {
    return <p>Loading...</p>;
  }

  const globalGoals = sphere.goals.filter(
    (goal: any) => goal.type === 'global'
  );
  const weekGoals = sphere.goals.filter((goal: any) => goal.type === 'week');

  return (
    <MainLayout>
      <div style={{ padding: '20px' }}>
        <h3>{sphere.title}</h3>
        <AddGoal sphere={sphere} />
        <h2>Global goals</h2>
        {globalGoals.map(
          (goal: any): ReactElement => (
            <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
          )
        )}
        <h2>Week goals</h2>
        {weekGoals.map(
          (goal: any): ReactElement => (
            <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
          )
        )}
      </div>
    </MainLayout>
  );
};

export default SpherePage;
