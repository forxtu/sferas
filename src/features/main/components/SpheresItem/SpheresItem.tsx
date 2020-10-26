import React from 'react';
import styled from 'styled-components';

// Components
import GoalItem from 'features/main/components/GoalItem';

// Styles
import indents from 'styles/partials/indents';

// Types
import type { ReactElement } from 'react';
import type { Sphere, Goal } from 'features/main/reducers/appDataReducer';

type SpheresItem = {
  sphere: Sphere;
};

const Wrapper = styled.div`
  padding: 0 0 ${indents.large} ${indents.large};
`;

const SpheresItem = ({ sphere }: SpheresItem): ReactElement => {
  return (
    <Wrapper>
      <h3>{sphere.title}</h3>
      {sphere.goals.map(
        (goal: Goal): ReactElement => (
          <GoalItem key={goal.goalId} goal={goal} sphere={sphere} />
        )
      )}
    </Wrapper>
  );
};

export default SpheresItem;
