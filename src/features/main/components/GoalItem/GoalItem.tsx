import React, { useState } from 'react';
import { notification } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

// Components
import Modal from 'components/elements/Modal';
import { Text } from 'components/elements/Typography';
import Button from 'components/elements/Button';
import { GoalItemWrapper } from 'features/main/components/GoalItem/goalItemStyles';

// Assets
import EditIcon from 'assets/images/icons/edit.svg';
import CrossIcon from 'assets/images/icons/cross.svg';

// Hooks
import useAppData from 'features/main/hooks/useAppData';
import useEditableGoal from 'features/main/hooks/goals/useEditableGoal';

// Styles
import colors from 'styles/partials/colors';

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
    <GoalItemWrapper bg={colors.green100} isFlat>
      <Text
        editable={{
          onChange: handleSetGoalTitle,
          icon: <img src={EditIcon} alt="Edit goal button" />
        }}
      >
        {goalTitle}
      </Text>
      <img
        src={CrossIcon}
        alt="Delete goal button"
        onClick={(): void => setIsDeleteModalOpen(true)}
      />
      <Modal
        title={`Goal "${goal.title}"`}
        visible={isDeleteModalOpen}
        onOk={handleOnDeleteConfirm}
        onCancel={(): void => setIsDeleteModalOpen(false)}
        footer={[
          <Button
            key="cancel-delete-button"
            onClick={(): void => setIsDeleteModalOpen(false)}
            isFlat
          >
            Cancel
          </Button>,
          <Button
            key="confirm-delete-button"
            onClick={handleOnDeleteConfirm}
            isFlat
            buttonType="secondary"
          >
            Confirm
          </Button>
        ]}
      >
        <Text>Are you sure you want to delete this goal?</Text>
      </Modal>
    </GoalItemWrapper>
  );
};

export default GoalItem;
