import styled from 'styled-components';
import { Modal } from 'antd';

// Styles
import colors from 'styles/partials/colors';

const StyledModal = styled(Modal)`
  background-color: ${colors.yellow100};
  border: 2px solid ${colors.blackBasic};
  border-radius: 12px;
  padding: 0;

  .ant-modal-content,
  .ant-modal-header {
    background-color: transparent;
  }

  .ant-modal-header,
  .ant-modal-footer {
    border: 0;
  }
`;

export default StyledModal;
