import React, { useState, useCallback } from 'react';
import { Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

// Components
import Button from 'components/elements/Button';

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
  goalType: GoalType;
};

const AddGoal = ({ sphere: { sphereId }, goalType }: AddGoal) => {
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
    <div>
      <Input
        value={goal.title}
        onChange={handleSetGoal}
        placeholder="Set your goal"
      />
      <Button onClick={addGoal}>Add goal</Button>
      <Button onClick={handleSetIsEditView}>Cancel</Button>
    </div>
  ) : (
    <Button onClick={handleSetIsEditView} icon={<PlusCircleOutlined />} />
  );
};

export default AddGoal;
