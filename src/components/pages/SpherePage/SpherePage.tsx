import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Components
import MainLayout from 'components/layouts/MainLayout';
import { Title } from 'components/elements/Typography';
import AddGoal from 'features/main/components/AddGoal';
import GoalItem from 'features/main/components/GoalItem';

// Styles
import indents from 'styles/partials/indents';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Utils
import { RouteUrl } from 'routes';

// Types
import type { ReactElement } from 'react';

type Params = {
  sphereId: string;
};

const GlobalGoalsWrapper = styled.div``;
const WeekGoalsWrapper = styled.div``;
const Wrapper = styled.div`
  padding: ${indents.large};

  ${GlobalGoalsWrapper} {
    margin-bottom: ${indents.extraLarge};
  }
`;

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
      <Wrapper>
        <GlobalGoalsWrapper>
          <Title level={2}>{sphere.title}</Title>
          <Title level={3}>Глобальные цели</Title>
          {globalGoals.map(
            (goal: any): ReactElement => (
              <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
            )
          )}
          <AddGoal sphere={sphere} goalType="global" />
        </GlobalGoalsWrapper>
        <WeekGoalsWrapper>
          <Title level={3}>Цели на неделю</Title>
          {weekGoals.map(
            (goal: any): ReactElement => (
              <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
            )
          )}
          <AddGoal sphere={sphere} goalType="week" />
        </WeekGoalsWrapper>
      </Wrapper>
    </MainLayout>
  );
};

export default SpherePage;
