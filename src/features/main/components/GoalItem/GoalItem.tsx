import React from 'react';
import { Typography } from 'antd';

// Hooks
import useAppData from 'features/main/hooks/useAppData';
import useEditableGoal from 'features/main/hooks/goals/useEditableGoal';

// Types
import type { ReactElement } from 'react';
import type { Sphere, Goal } from 'features/main/reducers/appDataReducer';

type Props = {
  goal: Goal;
  sphere: Sphere;
};

const { Text } = Typography;

const GoalItem = ({ goal, sphere: { sphereId } }: Props): ReactElement => {
  const { handleRemoveGoal } = useAppData();
  const { goalTitle, handleSetGoalTitle } = useEditableGoal({ goal, sphereId });

  const { goalId } = goal;

  return (
    <div
      style={{
        background: 'lightgreen',
        padding: '20px',
        marginTop: '10px'
      }}
    >
      <Text editable={{ onChange: handleSetGoalTitle }}>{goalTitle}</Text>
      <button onClick={(): void => handleRemoveGoal({ sphereId, goalId })}>
        Remove
      </button>
    </div>
  );
};

export default GoalItem;
