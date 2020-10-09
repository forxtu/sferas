import React, { useState, JSXElementConstructor } from 'react';
import { Modal, notification } from 'antd';
import { DeleteOutlined, CheckCircleTwoTone } from '@ant-design/icons';

// Components
import { Text } from 'components/elements/Typography';

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

const GoalItem = ({ goal, sphere: { sphereId } }: Props): ReactElement => {
  const { handleRemoveGoal } = useAppData();
  const { goalTitle, handleSetGoalTitle } = useEditableGoal({ goal, sphereId });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { goalId } = goal;

  const handleOnDeleteConfirm = (): void => {
    handleRemoveGoal({ sphereId, goalId });

    notification.open({
      message: goal.title,
      description: 'Goal was succesfully deleted.',
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />
    });
  };

  return (
    <div
      style={{
        background: 'lightgreen',
        padding: '20px',
        marginTop: '10px'
      }}
    >
      <Text editable={{ onChange: handleSetGoalTitle }}>{goalTitle}</Text>
      <DeleteOutlined onClick={(): void => setIsDeleteModalOpen(true)} />
      <Modal
        title={`Goal "${goal.title}"`}
        visible={isDeleteModalOpen}
        onOk={handleOnDeleteConfirm}
        onCancel={(): void => setIsDeleteModalOpen(false)}
      >
        <Text>Are you sure you want to delete this goal?</Text>
      </Modal>
    </div>
  );
};

export default GoalItem;
