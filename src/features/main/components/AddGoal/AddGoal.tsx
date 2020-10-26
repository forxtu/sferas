import React, { useState, useCallback } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

// Components
import Button from 'components/elements/Button';
import Input from 'components/elements/Input';

// Hooks
import useAppData from 'features/main/hooks/useAppData';

// Styles
import { AddGoalWrapper } from 'features/main/components/AddGoal/addGoalStyles';

// Types
import type { ChangeEvent, ReactElement } from 'react';
import type {
  Sphere,
  Goal,
  GoalType
} from 'features/main/reducers/appDataReducer';

type AddGoal = {
  sphere: Sphere;
  goalType: GoalType;
};

const AddGoal = ({ sphere: { sphereId }, goalType }: AddGoal): ReactElement => {
  const { handleAddGoal } = useAppData();

  const [isEditView, setIsEditView] = useState(false);
  const [goal, setGoal] = useState<Goal>({
    title: '',
    type: goalType,
    goalId: ''
  });

  const handleSetIsEditView = (): void => {
    setIsEditView(!isEditView);

    setGoal({
      ...goal,
      title: ''
    });
  };

  const handleSetGoal = (e: ChangeEvent): void => {
    e.preventDefault();

    setGoal({
      ...goal,
      title: (e.target as HTMLInputElement).value
    });
  };

  const addGoal = useCallback((): void => {
    if (goal.title !== '') {
      handleAddGoal({ sphereId, goal });

      setGoal({
        ...goal,
        title: ''
      });
    }
  }, [goal.type, goal.title]);

  return isEditView ? (
    <AddGoalWrapper>
      <Input
        value={goal.title}
        onChange={handleSetGoal}
        placeholder="Set your goal"
      />
      <Button onClick={addGoal}>Add goal</Button>
      <Button onClick={handleSetIsEditView}>Cancel</Button>
    </AddGoalWrapper>
  ) : (
    <Button onClick={handleSetIsEditView} icon={<PlusCircleOutlined />} />
  );
};

export default AddGoal;
